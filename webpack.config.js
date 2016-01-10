module.exports = {
	  entry: "./main/src/main.js"
	, output: {
		  path: __dirname + "/public/src/"
		, filename: "bundle.js"
	}
	, resolve: {
		extensions: ['', '.js', '.jsx', '.less']
	}
	, module: {
		loaders: [
			{
				  test: /\.js$/
				, exclude: /node_modules/
				, loader: "babel?presets[]=es2015&presets[]=react&presets[]=stage-0"
			}
			, {
				  test: /\.less$/
				, loader: 'style!css!less'
			}
		]
	}
}