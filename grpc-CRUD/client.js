import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './data.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const footballersData = grpcObject.data.FootballersData;

const client = new footballersData('localhost:50051', grpc.credentials.createInsecure());

function createFootballers(name, nation, club) {
    const footballers = {
        name: name,
        nation: nation,
        club: club,
    };

    client.createFootballers(footballers, (err, response) => {
        console.log(response);
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Player created`);
    });
}

function readAllFootballers() {
    client.ReadAllFootballers(null, (err, response) => {
        if (err) {
            console.error(err)
            return;
        }

        console.log(response)
    })
}

function readFootballers(id) {
    client.ReadFootballers({ id: id }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(response);
    });
}

function updateFootballers(id, name, nation, club) {
    const footballers = {
        name: name,
        nation: nation,
        club: club,
        id: id
    };

    client.UpdateFootballers(footballers, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Updated footballer with id ${response.id}`);
    });
}

function deleteFootballers(id) {
    client.DeleteFootballers({ id: id }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Deleted footballer with id ${id}`);
    });
}

export default{
  createFootballers,
  readAllFootballers,
  readFootballers,
  updateFootballers,
  deleteFootballers
}