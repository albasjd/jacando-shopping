import express from 'express';

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;

// Set up Express
const app = express();

app.get('/', (req, res) => {
  res.send('Jacando Server Hello World');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`)
});