require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());
// app.use(cors());




const uri = "mongodb+srv://example:UD2gViuzfCdoWZdY@cluster0.bnzewy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {}
}
run().catch(console.dir);






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });