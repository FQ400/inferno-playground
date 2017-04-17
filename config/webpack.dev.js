const webpack = require('webpack');
const merge   = require('webpack-merge');

const common = require('./webpack.common.js');
const styles = require('./webpack.utils').styles;

const dev = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // DEV: Boot into Dev Server
    'webpack/hot/dev-server',
    'webpack-dev-server/client'
  ],

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\/src\/app\/index\.js$/,
        loader: 'text-transform-loader',
        options: {
          prependText: 'if (process.env.NODE_ENV === \'development\' && module.hot) module.hot.accept();'
        }
      }
    ]
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    pathinfo: true
  },

  devServer: {
    hot: true,
    overlay: true,
    stats: 'minimal'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.ProgressPlugin()
  ]
};

module.exports = merge(dev, common, styles.inline);
