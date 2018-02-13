const App = require('yeps');

const error = require('yeps-error');
const serve = require('yeps-static');
const index = require('yeps-index');
const graphql = require('yeps-graphql');
const Router = require('yeps-router');
const server = require('yeps-server');

const { resolve } = require('path');
const { createReadStream } = require('fs');

const schema = require('./schema');

const root = resolve(__dirname, '..', 'dist');
const graphiql = true;

const app = new App();

app.all([
  error(),
  serve({ root, index: false }),
  index({ root }),
]);

const router = new Router();

router.all('/graphql').then(graphql({ schema, graphiql }));

app.then(router.resolve());

app.then(ctx => new Promise((res, rej) => {
  createReadStream(resolve(__dirname, '..', 'dist', 'index.html'))
    .pipe(ctx.res)
    .on('error', rej)
    .on('close', rej)
    .on('finish', res);
}));

module.exports = server.createHttpServer(app);
