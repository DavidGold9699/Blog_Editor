import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/blogeditor'; // Your MongoDB URI from .env.local
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to maintain the connection
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, create a new client for every request
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;