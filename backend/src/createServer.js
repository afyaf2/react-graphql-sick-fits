const { GraphQLServer } = require('graphql-yoga');
// import Resolvers
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query')
const db = require('./db')

//create Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  })
}

module.exports = createServer;
