module.exports = {
	  entry: "./main/client/main.js"
	, output: {
		  path: __dirname + "/public/src/"
		, filename: "bundle.js"
	}
	, resolve: {
		extensions: ['', '.js', '.jsx']
	}
	, module: {
		loaders: [{
			  test: /\.js$/
			, exclude: /node_modules/
			, loader: "babel?presets[]=es2015&presets[]=react&presets[]=stage-0"
		}]
	}
}