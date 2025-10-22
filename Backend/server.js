const express = require('express');
const app = express();
const cors = require('cors') ;
const port = 3002;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

// Use environment variable MONGO_URI when available, otherwise fall back to a local/embedded URI.
// IMPORTANT: keep credentials out of source code for production. This fallback is intended for
// quick local testing only.
const fallbackUrl = 'mongodb+srv://Bhagya:2001@cluster0.rsj0dxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoUri = process.env.MONGO_URI || fallbackUrl;

const connect = async () => {
  try {
    // mongoose.connect returns a promise; include options if needed in newer mongoose versions
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected successfully');
    return true;
  }
  catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    return false;
  }
};

(async () => {
  const ok = await connect();

  // Start the server regardless of DB connection to allow API responses for non-DB endpoints,
  // but warn the developer if DB connection failed.
  const server = app.listen(port, host, () => {
    console.log(`✅ Node server is listening on http://${host}:${port}`);
    if (!ok) {
      console.warn('⚠️ The server started but MongoDB is not connected. User-related routes will fail.');
    }
  });

  app.use('/api', router);
})();