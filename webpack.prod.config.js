var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
var autoprefixer = require('autoprefixer');

process.noDeprecation = true;

const rootPath = path.resolve(__dirname, 'src');

const alias = {
  images: path.resolve(rootPath, 'assets/images'),
  styles: path.resolve(rootPath, 'assets/styles'),
  fonts: path.resolve(rootPath, 'assets/fonts'),
  src: rootPath
};

module.exports = {
  devtool: 'hidden-source-map',

  entry: [    
    './src/app.js'
  ],

  output: {    
    path: path.resolve(__dirname, 'dist'),         
    filename: '[name].[chunkhash].js'    
  },

  module: {
    rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
              },
            },
            {
              loader: 'sass-loader'
            }
          ],
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
            babelrc: false,
            presets: [['es2015', { modules: false }], 'react', 'stage-0'],
            plugins: ['transform-decorators-legacy', 'transform-runtime', 'lodash']
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: { loader: 'url-loader', options: { limit: 10240 } }
        },
        { 
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
          use: { loader: 'url-loader', options: { limit: 10000, mimetype: 'image/svg+xml' } }
        }
    ]
  },

  resolve: {
    alias,
    extensions: ['*', '.js', '.scss', '.png']    
  },

  plugins: [
    new WebpackChunkHash(),
    new LodashModuleReplacementPlugin,
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale/, 
      /(en-gb|ru)\.js/
    ),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    }), 
    new webpack.optimize.UglifyJsPlugin({      
      compress: {
        warnings: false,              
        drop_console: true,
        unsafe: true
      },
      output: {
        comments: false,
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Project title',
      template: './src/index.ejs',
      hash: true,
      minify: {
        removeComments: true
      }
    })
  ]
}
