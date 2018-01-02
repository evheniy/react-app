const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcss = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
};

const css = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 2,
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  },
};

const sass = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
};

const style = {
  loader: 'style-loader',
};

const rules = [{
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
}, {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: style,
    use: [css, postcss, sass],
  }),
}, {
  test: /\.css$/,
  exclude: /node_modules/,
  use: ExtractTextPlugin.extract({
    fallback: style,
    use: [css, postcss],
  }),
}, {
  // for node_modules
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: style,
    use: [css, postcss],
  }),
}, {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name]_[hash].[ext]',
    },
  }, {
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
        quality: 65
      },
      optipng: {
        enabled: true,
      },
      pngquant: {
        quality: '65-90',
        speed: 4
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75
      }
    }
  },
  ],
}];

module.exports = rules;

