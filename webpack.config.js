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
				test: /\.s[ac]ss$/,
				loader: [
					{
						loader: 'style-loader'
					},
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localsConvention: 'asIs'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	mode: 'development',
	devtool: 'source-map'
};
