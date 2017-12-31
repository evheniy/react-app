const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require('yeps-graphql/graphql');

const UserType = require('./user');
const storage = require('../storage');

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'User information',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return storage;
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, { id }) {
        const index = storage.findIndex(user => user.id === parseInt(id, 10));

        if (index !== -1) {
          return storage[index];
        }

        return Promise.reject(new Error('User not found!'));
      },
    },
  },
});

module.exports = QueryType;
