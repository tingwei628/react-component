var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var historyApiFallback = require('connect-history-api-fallback');
var config = require('./webpack.config.js');
var port = '3000';

var app = express();
app.use(historyApiFallback({
  index: '/static/index.html',
  verbose: true,
  logger: console.log.bind(console)
}));
var compiler = webpack(config);
var middleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening port %s', port);
});
