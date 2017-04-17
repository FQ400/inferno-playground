const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const root   = (location) => path.join(__dirname, '..', location);
const source = (location) => path.join(__dirname, '../src', location);

exports.dir = {
  root: root,
  source: source
};

const sassLoaderConfig = {
  loader: 'sass-loader',
  options: {
    includePaths: [source('/assets/styles/config/')]
  }
};

const extractCSS = {
  module: {
    loaders: [
      {
        test: /\.s[ca]ss$/,
        loader: ExtractTextPlugin.extract({ use: ['css-loader?sourceMap&minimize', sassLoaderConfig] })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap&minimize'])
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.[chunkhash].[hash].css',
      allChunks: true
    })
  ]
};

const inlineCSS = {
  module: {
    loaders: [
      {
        test: /\.s[ca]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          sassLoaderConfig
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

exports.styles = {
  extract: extractCSS,
  inline: inlineCSS
};
