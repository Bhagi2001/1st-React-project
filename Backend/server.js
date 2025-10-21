const express = require('express');
const app = express();
const cors = require('cors') ;
const port = 3002;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://<Bhagya>:<2001>@cluster0.rsj0dxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
  try {
    await mongoose.connect(uri)
    console.log('✅ MongoDB connected successfully')
  }
  catch (error) {
    console.error('❌ MongoDB connection failed:', error)
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`✅ Node server is listening on http://${host}:${port}`);
});
