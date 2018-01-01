const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';

const dist = 'dist';

// the path(s) that should be cleaned
const pathsToClean = [
  `${dist}/*.*`,
];

// the clean options to use
const cleanOptions = {
  root: resolve(__dirname, '..'),
  exclude: [`${dist}/.gitignore`],
  verbose: true,
  dry: false,
};

const plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  new LodashModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: join('src', 'index.html'),
  }),
  new ExtractTextPlugin('bundle.css', {
    allChunks: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (m) => /node_modules/.test(m.context)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'lodash',
    minChunks: (m) => /node_modules\/(?:lodash|moment)/.test(m.context)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'moment',
    minChunks: (m) => /node_modules\/(?:moment)/.test(m.context)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest",
    minChunks: Infinity
  }),
  new webpack.NamedModulesPlugin(),
];

if (isProduction) {
  plugins.push(
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([{
      from: require.resolve('workbox-sw'),
      to: 'workbox-sw.prod.js',
    }]),
    new WorkboxPlugin({
      globDirectory: dist,
      globPatterns: ['**/*.{html,js,css,png}'],
      swSrc: join('src', 'service-worker.js'),
      swDest: join(dist, 'service-worker.js'),
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/index.html',
    })
  );
} else {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    })
  );
}
module.exports = plugins;
