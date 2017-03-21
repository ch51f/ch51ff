const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, "src"),

	entry: {
		'main': './vue.js',
	},

	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'public/webpack'),
	},

	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			}),
		}, {
			test: /\.(eot|ttf|woff|woff2|svg)$/,
			use: 'file-loader'
		}, {
			test: /\.(png|jpg)$/,
			use: 'url-loader?limit=8192'
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {}
			}
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
		}]
	},

	resolve: {
    	// extensions: ['', '.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map',

	plugins: [
		new ExtractTextPlugin('/css/main.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
}

if (process.env.NODE_ENV === 'production') {
	module.exports.entry.main = './main.js';
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
