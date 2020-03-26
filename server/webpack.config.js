const path = require('path');

module.exports = {
	entry: './server',
	output: {
		filename: 'server-bundle.js',
		path: path.resolve(__dirname, '../build')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			}
		]
	},
	node: {
		global: false,
		__dirname: false,
		__filename: false
	},
	target: 'node'
};
