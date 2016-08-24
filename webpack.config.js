var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
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
	loader: 'style!css'
      }, {
	test: /\.(jpg|png|svg|jpeg|gif|woff|woff2|eot|ttf)/,
        loaders: ['url-loader?limit=10000'],
      }]  
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
