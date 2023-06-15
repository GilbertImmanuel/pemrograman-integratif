import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import mysql from "mysql";

const PROTO_PATH = "./data.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const footballersData = grpcObject.data.FootballersData;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "grpc",
});

connection.connect();

const server = new grpc.Server();

function createFootballers(call, callback) {
  const footballers = call.request;

  connection.query("INSERT INTO footballers SET ?", footballers, (err, result) => {
    if (err) throw err;

    footballers.id = result.insertId;
    callback(null, "Footballers created successfully");
  });
}

function readAllFootballers(call, callback) {
  connection.query("SELECT * FROM footballers", (err, results) => {
    if (err) throw err;

    const footballers = results;

    callback(null, { footballers: results });
  })
}

function readFootballers(call, callback) {
  const id = call.request.id;

  connection.query("SELECT * FROM footballers WHERE id = ?", id, (err, results) => {
    if (err) throw err;

    const footballers = results[0];
    callback(null, footballers);
  });
}

function updateFootballers(call, callback) {
  const footballers = call.request;

  connection.query(
    "UPDATE footballers SET name = ?, nation = ?, club = ? WHERE id = ?",
    [footballers.name, footballers.nation, footballers.club, footballers.id],
    (err, result) => {
      if (err) throw err;

      callback(null, footballers);
    }
  );
}

function deleteFootballers(call, callback) {
  const id = call.request.id;

  connection.query("DELETE FROM footballers WHERE id = ?", id, (err, result) => {
    if (err) throw err;

    callback(null, "Footballers deleted successfully");
  });
}

function main() {
  server.addService(footballersData.service, {
    CreateFootballers: createFootballers,
    ReadAllFootballers: readAllFootballers,
    ReadFootballers: readFootballers,
    UpdateFootballers: updateFootballers,
    DeleteFootballers: deleteFootballers,
  });


  server.bindAsync(
    "localhost:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("Server started on port 50051");
    }
  );

}

main();
