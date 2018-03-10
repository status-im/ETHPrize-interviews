var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

	context: path.resolve('./src'),

	entry: {

		app: [
			
			'./js/main.js'

		]
	},

	output: {

		path: path.resolve(__dirname,'./dist'),

		filename: 'js/bundle.js',

		publicPath: '/'

	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.html$/,
			loader: 'html-loader'
		},{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				use: ["css-loader", "sass-loader"],
				fallback: "style-loader"
			})
		},{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: ["css-loader"],
				fallback: "style-loader"
			})
		},{
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
		},{
			test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader?name=./fonts/[name].[ext]"
		},{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [

				{
					loader:'file-loader',
					options: {
						name: 'img/[name].[ext]'
					}

				},

				'img-loader'

			]
  			
		}]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
            Tether: 'tether',
            Popper: ['popper.js', 'default']
		}),
		new BrowserSyncPlugin({
			server: {
				baseDir: ['dist']
			},
			port: 3000,
			host: 'localhost',
			open: false
		}),
		new CopyWebpackPlugin([{
				from: './robots.txt'
			},{
				from: './favicon.ico'
			},{
				from: './*.png'
			},{
				from: './*.xml'
			},{
				from: './manifest.json'
			},{
				from: './img/**/*',
				to: './'
		}]),
		new ExtractTextPlugin("css/[name].css"),
		new webpack.LoaderOptionsPlugin({
			minimize : inProduction
		})
	]

};


if (process.env.NODE_ENV === 'production'){

	module.exports.plugins.push(
	
		new webpack.optimize.UglifyJsPlugin()
	
	);

	
	// module.exports.output.publicPath = "/ETHPrize/"; //To deploy to github pages - uncomment this

	module.exports.output.filename = "js/bundle.[chunkhash].js"; 

}