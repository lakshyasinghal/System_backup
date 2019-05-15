module.exports = [{
	entry: ["./global.js","./app.js"],
	output: {
		filename: "bundle.js"
	},
	module: {
		rules:[
			{
				test: /\.es6$/,
		        exclude: /node_modules/,
		        use: {
		        	loader: "babel-loader"
		        }
			}
		]
	},
	resolve: {
	    extensions: ['*', '.js', '.es6']
	}
}]