const webpack = require('webpack');
const dir = require('./webpack.utils').dir;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPackPlugin = require('happypack');

const common = {
  entry: {
    'js/app': dir.source('index')
  },

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\/(components|containers)\/.+\.jsx?$/,
        loader: 'baggage-loader?[file].scss'
      },
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader',
        include: dir.source('.')
      },
      {
        enforce: 'pre',
        test: /\/(components|containers)\/.+\.s[ca]ss$/,
        loader: 'text-transform-loader',
        options: {
          prependText: '@import "customization";'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [dir.source('.'), dir.source('app/components'), "node_modules"],
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat',
      '@assets': './src/assets'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HappyPackPlugin({
      loaders: [ 'babel-loader' ],
      verbose: false
    })
  ]
};

module.exports = common;
