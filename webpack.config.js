const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: !prod
			? ['@webcomponents/custom-elements', './src/main.js']
			: ['@webcomponents/custom-elements', './src/components/components.module.js'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('./node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.js', '.svelte', '.css'],
	},
	output: !prod
		? {
				path: __dirname + '/public',
				filename: 'bundle.js',
				chunkFilename: 'bundle.[id].js',
		  }
		: {
				path: __dirname + '/lib',
				filename: 'index.js',
		  },
	module: {
		rules: [
			{
				test: /(\.m?js?$)|(\.svelte$)/,
				exclude: /\bcore-js\b/,
				//exclude: [ 'node_modules/@babel/**', 'node_modules/core-js/**' ],
				//exclude: /[\\/]node_modules[\\/](?!(@babel|core-js)[\\/]).*/,
				//test: /\.js$/, // /(\.m?js?$)|(\.svelte$)/,
				//exclude: /(node_modules|bower_components|core-js)/,
				//exclude: [/\bcore-js\b/, /(node_modules|bower_components|core-js)/, /\bwebpack\b/, /\bregenerator-runtime\b/],
				//exclude: /[\\/]node_modules[\\/](?!(lit-element|lit-html)[\\/]).*/,
				  loader: 'babel-loader',
					options: {
						babelrc : false,
						configFile: path.resolve('babel.config.js'),
					},
					include: [
					  path.resolve('src'),
					  path.resolve('test'),
					  //path.resolve('node_modules/webpack-dev-server/client'),
					  //path.resolve('node_modules/@util/qcmagic')
					]
			  },		
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: !prod,
						dev: !prod,
						customElement: true,
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
				],
			},
	        {
	          test: /\.(png|svg|jpg|gif)$/,
	          use: [
	            'file-loader',
	          ],
	        },	
		],
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devtool: prod ? false : 'source-map',
};
