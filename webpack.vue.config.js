const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'vue'),

	entry: {
		'main': './main.js',
	},

	output: {
		filename: '[name].js',
		publicPath: '/dist/',
		path: path.resolve(__dirname, 'public/vue'),
	},

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'postcss-loader'},
					{loader: 'less-loader'},
				]
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			}, 
			{
				test: /\.(eot|ttf|woff|woff2|svg)$/,
				use: 'file-loader',
			},
			{
				test: /\.(png|jpg)$/,
				use: 'url-loader?limit=8192',
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".vue"],
		alias: {
			'vue': 'vue/dist/vue.js',
			'common': path.resolve(__dirname, 'common'),
		},
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
	performance: {
		hints: false,
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				postcss: function() {
					return [
						require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
					]
				}
			}
		})
	],
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false,
			},
		}),
	]);
}