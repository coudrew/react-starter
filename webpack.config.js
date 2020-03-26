/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'ui.bundle.js',
		path: path.resolve(__dirname, 'build/assets/js')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.module\.s(c|a)ss$/,
				loader: [
					isDevelopment
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourcMap: isDevelopment
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourcMap: isDevelopment
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		})
	],
	mode: 'development',
	devtool: 'source-map'
};
