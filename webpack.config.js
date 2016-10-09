var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client?reload=true', './src/demo/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules/'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
	      loaders: ['react-hot', 'babel'],
	      include: path.join(__dirname, 'src'),
	      exclude: '/node_modules/'
      }, {
        test: /\.css$/,
	      loader: 'style!css?importLoaders=1!postcss',
      }, {
	      test: /\.(jpg|png|svg|jpeg|gif|woff|woff2|eot|ttf|ico)/,
        loaders: ['url-loader?limit=10000'],
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
