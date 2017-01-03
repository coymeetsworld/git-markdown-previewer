var webpack = require('webpack');
var path = require('path');

module.exports = {
	
	/* Where it should start processing your code. */
	entry: [
		'script!jquery/dist/jquery.min.js', /* script loader */
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery'	
	},
	plugins: [
		new webpack.ProvidePlugin({				
			$: "jquery", /* allows us to not specify requring jQuery files in jsx files */
			jQuery: "jquery"
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {			
		root: __dirname, /* variable in node.js that gives path to file you're in */
		modulesDirectories: [
			'node_modules',
			'./app/components',	
		],
		alias: { /* Webpack aliases */
			applicationStyles: 'app/styles/app.scss',
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders:  [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/normalize-scss/sass')
		]
	},
	devtool: 'cheap-module-eval-source-map' /* for debugging, shows actual code not webpack code */
};
