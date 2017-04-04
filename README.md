[![dependencies Status](https://david-dm.org/jekaantipin/react-webpack2-starter/status.svg)](https://david-dm.org/jekaantipin/react-webpack2-starter)
[![devDependencies Status](https://david-dm.org/jekaantipin/react-webpack2-starter/dev-status.svg)](https://david-dm.org/jekaantipin/react-webpack2-starter?type=dev)
[![Build Status](https://travis-ci.org/jekaantipin/react-webpack2-starter.svg?branch=master)](https://travis-ci.org/jekaantipin/react-webpack2-starter)

## Getting started

```
$ git clone https://github.com/jekaantipin/react-webpack2-starter.git YOUR_APP
```

```
$ cd YOUR_APP
```

```
$ npm install
```

## npm commands
* `npm run dev` - Run for development, go to http://localhost:3000
* `npm run dev:dashboard` - same as (npm run dev) but with nice logging console interface
* `npm run build` - Run for production
* `npm run npm-check:update` - Interactive console for updating npm packages

## Features

* [React](https://facebook.github.io/react/)
* [Webpack 2](https://webpack.js.org/) with "Tree-Shaking".
* [Express](https://expressjs.com/) server.
* [Babel](https://babeljs.io/) ES6 and ES7 transpiling.
* [React Hot Loader 3](https://github.com/gaearon/react-hot-loader) Tweak React components in real time.
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html) serves the files emitted from webpack over the Express server.
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
* CSS and SCSS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer).
* [whatwg-fetch](https://github.com/github/fetch) A window.fetch JavaScript polyfill for programmatically making web requests in the browser.


## Plugins

* Extract Text
	* [https://github.com/webpack/extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)
* HTML Webpack 
	* [https://github.com/ampedandwired/html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
* UglifyJS
	* [https://webpack.github.io/docs/list-of-plugins.html](https://webpack.github.io/docs/list-of-plugins.html)
	* [https://github.com/mishoo/UglifyJS](https://github.com/mishoo/UglifyJS)
* Define
	* [https://webpack.github.io/docs/list-of-plugins.html](https://webpack.github.io/docs/list-of-plugins.html)
* babel-plugin-transform-react-remove-prop-types - Remove unnecessary React propTypes from the production build.
	* [https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types]

## Loaders

* babel-loader
	* [https://github.com/babel/babel-loader](https://github.com/babel/babel-loader)
* url-loader
	* [https://github.com/webpack/url-loader](https://github.com/webpack/url-loader)
* file-loader
	* [https://github.com/webpack/file-loader](https://github.com/webpack/file-loader)
* style-loader
	* [https://github.com/webpack/style-loader](https://github.com/webpack/style-loader)
* css-loader
	* [https://github.com/webpack/css-loader](https://github.com/webpack/css-loader)