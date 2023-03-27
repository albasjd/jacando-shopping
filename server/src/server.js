import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

// Load environment variables
dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_NAME;

// Set up Express
const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

// Set up Express middlewares
app.use(cors(), bodyParser.json(), expressMiddleware(server));

// Connect to MongoDB
mongoose
.connect(MONGODB_URI, {
  dbName: DB_NAME,
})
.then(() => {
  console.log('Connected to MongoDB');
  return httpServer.listen(PORT, () =>
    console.log(`🚀 Server is running at http://localhost:${PORT}`)
  );
});
