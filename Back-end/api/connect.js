import { MongoClient } from "mongodb";
// Connection URI
const URI = "mongodb+srv://erkzz:24177383@cluster0.uj5oq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a new MongoClient
const client = new MongoClient(URI);

export const db = client.db('spotifyCL')


console.log(db)

