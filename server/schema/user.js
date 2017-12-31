const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('yeps-graphql/graphql');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
  },
});

module.exports = UserType;
