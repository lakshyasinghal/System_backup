var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
	test: [/\.js$/ , /\.es6$/],
	exclude: [/node_modules/],
	use: WebpackStripLoader.loader('console.log')
}


devConfig[0].module.rules.push(stripLoader);

module.exports = devConfig;