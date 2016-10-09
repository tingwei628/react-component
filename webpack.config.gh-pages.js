var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
  devtool: 'source-map',
  entry: {
    'demo': [path.join(__dirname, 'src/demo/index.js')],
    'vendors': ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name]-[chunkhash].css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules/'
      }, {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      }, {
        test: /\.(jpg|png|svg|jpeg|gif|woff|woff2|eot|ttf|ico)/,
        loaders: ['url-loader?limit=10000']
      }
    ]  
  },
  postcss: function() {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
