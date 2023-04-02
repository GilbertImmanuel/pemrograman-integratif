const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const firebase = require('firebase-admin');
const serviceAccount = require('./grpc-nodejs-gilbert-firebase-adminsdk-ks4kk-d6083f5f19.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://grpc-nodejs-gilbert-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const PORT = 9000;
const todoPackageDefinition = protoLoader.loadSync(
  './proto/todo.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const todoProto = grpc.loadPackageDefinition(todoPackageDefinition);

const server = new grpc.Server();

server.addService(todoProto.TodoService.service, {
  GetTodo: getTodo,
  GetTodos: getTodos,
  CreateTodo: createTodo,
  UpdateTodo: updateTodo,
  DeleteTodo: deleteTodo
});

server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
console.log(`Server running at http://0.0.0.0:${PORT}`);
server.start();

function getTodo(call, callback) {
  const id = call.request.id;
  firebase.database().ref(`todos/${id}`).once('value', snapshot => {
    const todo = snapshot.val();
    if (!todo) {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Not found'
      });
      return;
    }
    callback(null, todo);
  });
}

function getTodos(call) {
  const stream = firebase.database().ref('todos').once('value', snapshot => {
    snapshot.forEach(childSnapshot => {
      const todo = childSnapshot.val();
      call.write(todo);
    });
    call.end();
  });
}

function createTodo(call, callback) {
  const todo = call.request;
  const id = todo.id;
  firebase.database().ref(`todos/${id}`).set(todo, error => {
    if (error) {
      callback({
        code: grpc.status.INTERNAL,
        details: 'Error creating todo'
      });
      return;
    }
    callback(null, todo);
  });
}

function updateTodo(call, callback) {
  const todo = call.request;
  const id = todo.id;
  firebase.database().ref(`todos/${id}`).once('value', snapshot => {
    const existingTodo = snapshot.val();
    if (!existingTodo) {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Not found'
      });
      return;
    }
    firebase.database().ref(`todos/${id}`).set(todo, error => {
      if (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: 'Error updating todo'
        });
        return;
      }
      callback(null, todo);
    });
  });
}

function deleteTodo(call, callback) {
  const id = call.request.id;
  firebase.database().ref(`todos/${id}`).remove(error => {
    if (error) {
      callback({
        code: grpc.status.INTERNAL,
        details: 'Error deleting todo'
      });
      return;
    }
    callback(null, {});
  });
}