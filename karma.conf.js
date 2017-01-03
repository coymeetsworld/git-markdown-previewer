
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: [
			'node_modules/jquery/dist/jquery.min.js',
			'app/tests/**/*.test.jsx'
		],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] /* webpack gives you require, sourcemap uses actual jsx files to show where errors are. */
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});	
};