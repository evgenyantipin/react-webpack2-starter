require('babel-register');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const open = require('open');
const config = require("./webpack.dev.config.js");
const compiler = webpack(config);

const app = express();

let host = (process.env.HOST || 'localhost');
let port = (process.env.PORT || 3000);

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
    open(`http://localhost:${port}`);
  }
});