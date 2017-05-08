var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var DashboardPlugin = require('webpack-dashboard/plugin');

process.noDeprecation = true;

const rootPath = path.resolve(__dirname, 'src');

const alias = {
  images: path.resolve(rootPath, 'assets/images'),
  styles: path.resolve(rootPath, 'assets/styles'),
  fonts: path.resolve(rootPath, 'assets/fonts')
};

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 1717

let babelTransformsPlugins = [
  { transform: "react-transform-catch-errors", imports: ["react", "delicate-error-reporter"] },
  { transform: "react-transform-hmr", imports: ["react"], locals: ["module"] }
]

module.exports = {
  devtool: 'inline-source-map',
  entry: [    
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/app.js'
  ],

   output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',    
  },

  module: {
    rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true
              }
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
                sourceMap: true,
                plugins: () => [autoprefixer],
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
          ],
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [['es2015', { modules: false }], 'react', 'stage-0'],
            plugins: ['transform-decorators-legacy', 'react-hot-loader/babel', [ 'react-transform', { transforms: babelTransformsPlugins } ]]
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: { 
            loader: 'url-loader', 
            options: { limit: 10240 } 
          }
        },
        { 
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
          use: { 
            loader: 'url-loader', 
            options: { limit: 10000, mimetype: 'image/svg+xml' } 
          }
        }        
    ]
  },

  resolve: {
    modules: [      
      rootPath,
      'node_modules'
    ],
    alias,
    extensions: ['*', '.js', '.scss']    
  },

  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
    new HtmlWebpackPlugin({
      title: 'Project title',
      inject: true,
      template: './src/index.ejs'
    })
  ]
}