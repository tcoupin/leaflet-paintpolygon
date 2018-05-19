const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: './src/PaintPolygon.js',
	output: {
		filename: 'Leaflet.PaintPolygon.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		mainFields: ['browser', 'main', 'module'],
		extensions: ['.js', '.json', '.jsx']
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['dist'])
	],
	devServer: {
		contentBase: './dist'
	},
	externals: {
		leaflet: {
			root: "L",
			commonjs: "leaflet",
			commonjs2: "leaflet",
			amd: "leaflet"
		}
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'url-loader'
			]
		}]
	}
};