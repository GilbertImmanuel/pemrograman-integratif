const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const mysql = require('mysql2');

const PROTO_PATH = './service_def.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition).User;

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'tugaspi',
	waitForConnections: true,
	connectionLimit: 10,
});

function getUser(call, callback) {
	const userId = call.request.user_id;
	pool.query('SELECT * FROM users WHERE user_id = ?', [userId], (error, results) => {
		if (error) {
			console.error(error);
			callback({
				code: grpc.status.INTERNAL,
				message: 'Internal Server Error'
			});
			return;
		}
		if (results.length === 0) {
			callback({
				code: grpc.status.NOT_FOUND,
				message: 'User not found'
			});
			return;
		}
		const userData = results[0];
		const user = {
			user_id: userData.user_id,
			name: userData.name,
			age: userData.age,
		};
		callback(null, user);
	});
}

function addUser(call, callback) {
	const name = call.request.name;
	const age = call.request.age;
	pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (error, result) => {
		if (error) {
			console.error(error);
			callback({
				code: grpc.status.INTERNAL,
				message: 'Internal Server Error'
			});
			return;
		}
		const userId = result.insertId;
		const user = {
			user_id: userId,
			name: name,
			age: age,
		};
		callback(null, user);
	});
}

function main() {
	const server = new grpc.Server();
	server.addService(userProto.UserService.service, {
		getUser,
		addUser
	});
	server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
		console.log('Server running at http://localhost:50051');
		server.start();
	});
}

main();