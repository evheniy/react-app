const { resolve } = require('path');
const vendor = require('./vendor');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./dev_server');
const devtool = require('./devtool');

const settings = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.png'],
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/index'
    ],
    vendor,
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules,
  },
  plugins,
  devServer,
  devtool,
};
module.exports = settings;
