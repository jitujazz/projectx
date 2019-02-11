const Express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const serverConfig = require('./config');
const typeDefs = require('./schemas/typedefs/Index')
const resolvers = require('./schemas/resolvers/Index')

mongoose.connect(serverConfig.mongoURL, { useNewUrlParser: true })

const app = new Express();

app.use(bodyParser.json())

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(serverConfig.port, () => {
	console.log('Listening...')
})