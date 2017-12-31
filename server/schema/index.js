const { GraphQLSchema } = require('yeps-graphql/graphql');

const QueryType = require('./query');
const MutationType = require('./mutation');

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;
