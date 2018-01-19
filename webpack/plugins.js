const { resolve, join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

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
  new NpmInstallPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
    PUBLIC_PATH: JSON.stringify(process.env.PUBLIC_PATH),
  }),
  new LodashModuleReplacementPlugin(),
  new HtmlWebpackPlugin({ template: join('src', 'index.html') }),
  new ExtractTextPlugin('[name]_[contenthash].css', { allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (m) => /node_modules/.test(m.context)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'react',
    minChunks: (m) => /node_modules\/(?:react)/.test(m.context)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'lodash',
    minChunks: (m) => /node_modules\/(?:lodash)/.test(m.context)
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
  new FaviconsWebpackPlugin(join(__dirname, '..', 'src', 'modules', 'home', 'logo.png')),
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
    new CopyWebpackPlugin([{ from: join('src', 'favicon.ico') }]),
    new WorkboxPlugin({
      globDirectory: dist,
      globPatterns: ['**/*.{html,js,css,png,json}'],
      swSrc: join('src', 'service-worker.js'),
      swDest: join(dist, 'service-worker.js'),
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/index.html',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'all',
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      inject: true,
      theme_color: '#ffffff',
      icons: [
        {
          src: join('src', 'modules', 'home', 'logo.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
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
