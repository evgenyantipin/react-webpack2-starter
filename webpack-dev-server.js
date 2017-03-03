require('babel-register');

var host = (process.env.HOST || 'localhost');
var port = (process.env.PORT || 3000);

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

const config = require("./webpack.dev.config.js");
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {  
  hot: true,
  noInfo: true,
  filename: 'app.bundle.js',
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, host, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening at http://%s:%s', host, port);     
  }
});