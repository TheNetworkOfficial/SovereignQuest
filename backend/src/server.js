const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const startServer = async () => {
  const app = express();

  // Initialize Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Apply middleware
  app.use(cors());
  app.use(json());
  app.use('/graphql', expressMiddleware(server));

  // Start Express server
  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/graphql');
  });
};

startServer();
