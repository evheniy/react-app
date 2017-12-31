const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('yeps-graphql/graphql');

const UserType = require('./user');
const storage = require('../storage');


const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    createUser: {
      type: UserType,
      description: 'User creating',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (value, { id, name }) => {
        const index = storage.findIndex(user => user.id === parseInt(id, 10));

        if (index === -1) {
          storage.push({ id, name });
          return { id, name };
        }

        return Promise.reject(new Error('User exists!'));
      },
    },
    updateUser: {
      type: UserType,
      description: 'User updating',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (value, { id, name }) => {
        const index = storage.findIndex(user => user.id === parseInt(id, 10));

        if (index !== -1) {
          Object.assign(storage[index], { name });
          return storage[index];
        }

        return Promise.reject(new Error('User not found!'));
      },
    },
    deleteUser: {
      type: UserType,
      description: 'User deleting',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (value, { id }) => {
        const index = storage.findIndex(user => user.id === parseInt(id, 10));

        if (index !== -1) {
          storage.splice(index, 1);
          return { id };
        }

        return Promise.reject(new Error('User not found!'));
      },
    },
  }),
});

module.exports = MutationType;
