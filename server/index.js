const App = require('yeps');

const error = require('yeps-error');
const serve = require('yeps-static');
const graphql = require('yeps-graphql');
const Router = require('yeps-router');
const server = require('yeps-server');

const { resolve } = require('path');

const schema = require('./schema');

const root = resolve(__dirname, '..', 'dist');
const graphiql = true;

const app = new App();

app.all([
  error(),
  serve({ root }),
]);

const router = new Router();

router.all('/graphql').then(graphql({ schema, graphiql }));

app.then(router.resolve());

module.exports = server.createHttpServer(app);
