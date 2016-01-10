
## Step One: Installing dependencies, creating file structure, configuring Babel and Webpack.

### Installing dependencies.
To begin, create a new folder (mine will be named 'guidehub') and `cd` into that folder. Once inside run an `npm init -y` command to create your package.json. Though I won't be covering Git in this tutorial, I highly recommend running `git init` and committing and pushing regularly.

Once that is complete we can install our dependencies, this will require three more terminal commands from you:
- `npm install babel babel-core babel-loader babel-presets-es2015 babel-register body-parser cors express mongoose passport passport-github --save`
    + Installs and saves to our package.json all of our production dependencies, libraries that will be required to run the application.
- `npm install babel-preset-react babel-preset-stage-0 webpack less style-loader css-loader less-loader --save-dev`
    + Installs and saves to our package.json all of our pre-production dependencies, libraries we will be using during development that are not necessary during production.
- `npm install webpack -g`
    + Installs the webpack CLI(Command Line Interface) allowing us to run webpack from the command line.

This is a lot, but don't worry! Each dependency will be covered individually as we come to it.

### Creating the file structure.
To set up the skeleton of our file structure we will start by creating three new directories, each of which will have it's own sub-directories and files.

- main: Will contain all code to be compiled by Webpack.
    + src: Will contain all of our front end JavaScript
        * main.js: This will be the 'entry-point' for Webpack, more on that later!
    + styles: Will contain all of our LESS styling
- public: Will contain our HTML, CSS, and all frontend JavaScript after being compiled by Webpack.
    + index.html: The HTML in which our whole app will be displayed.
- server: Will contain nearly all of our backend code.
    + features: Will contain a folder for each backend 'feature', usually structured around a mongoose model.
    + config: Will contain our passport and configuration files.

We will also need three new files in the root director of our project (the guidehub folder).

- index.js: This will be an entry-point for Node and Babel
- server.js: Where we will create and run our Node/Express server
- webpack.config.js: Where we configure Webpack.

### Configuring Webpack.
Before we actually start setting things up, let's cover some quick basics of Webpack. Webpack is a 'module bundler', which means Webpack will gather our various files and dependencies, compile them into something the browser can understand, and bundle them into one file for us. This is what will let us write with React's JSX syntax as well as ES6.

Let's open up our newly created webpack.config.js and start our Webpack setup. We will begin by exporting a new JavaScript object from the file, like so:
```javascript
module.exports = {

}
```
This object is going to tell Webpack which files we want compiled, and what we want done with them. A full example of the configuration will be available at the end of the section.

The first property on the object will be `entry`. This entry point is where Webpack looks to begin bundling files, following all imports down a chain to find all of the necessary files.
```javascript
entry: './main/src/main.js'
```

Next we need to create an `output` property on our exports object, giving it a value of an object with two more keys: `path` and `filename`. This tells Webpack where in our file structure we would like our bundled file to be placed, and what we want it named. Note that Webpack will create the necessary 'src' directory for us.
```javascript
output: {
      path: __dirname + '/public/src/'
    , filename: 'bundle.js'
}
```

Now we need to add a `resolve` property that is equal to another object with a single property of `extensions`. This tells Webpack what file extensions to resolve when bundling.
```javascript
resolve: {
    extensions: ['', '.js', '.jsx', '.less']
}
```
The last property on our exports object will be `module`, an object that contains a `loaders` array. Here we are telling Webpack which files to run through which loaders.
```javascript
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
```

Here is how the full webpack.config.js should look:
```javascript
module.exports = {
      entry: "./main/src/main.js" // File Webpack begins bundling modules at.
    , output: {
          path: __dirname + "/public/src/" // The path at which to output our bundled file.
        , filename: "bundle.js" // What to name our bundled file.
    }
    , resolve: {
        extensions: ['', '.js', '.jsx', '.less'] // The extensions we want Webpack to process.
    }
    , module: {
        loaders: [ // Loaders to use
            {
                  test: /\.js$/ // Regular expression to determine which file extensions to process with these loaders.
                , exclude: /node_modules/ // Files to exclude.
                , loader: "babel?presets[]=es2015&presets[]=react&presets[]=stage-0" // Which loaders to run all files with a .js extension through.
            }
            , {
                  test: /\.less$/
                , loader: 'style!css!less'
            }
        ]
    }
}
```

### Testing Webpack.
Now that Webpack is set up, let's adjust some of the files we created when setting up our file structure. Starting in public/index.html.

Create a basic HTML structure and include a div with an id of `react-node` and include script tags that link to React, ReactDOM CDN's and './src/bundle.js' (the file that Webpack will create for us).

index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>guideHub</title>
</head>
<body>
    
<div id="react-node"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom.min.js"></script>
<script src="./src/bundle.js"></script>
</body>
</html>
```

_______

Next we'll create a new file named 'test.less' inside of main/styles/.

This file will simply create a variable named `baseColor` and set it equal to `red`, then set `background-color: @baseColor;`.

test.less:
```less
@baseColor: red;

html {
    background-color: @baseColor;
}
```

_______

The last file we need to modify is main/src/main.js. We're going to set up a basic React app.

main.js:
```javascript
import '../styles/test.less'; // Import our stylesheet, allowing Webpack access to the module.

class Main extends React.Component { // Create our Main component.
    render() { // Render a simple h2 tag to confirm React is running.
        return (
            <h2>Test</h2>
        );
    }
}

let documentReady = () => {
    let reactNode = document.getElementById('react-node'); // Save a reference to our react-node div.

    if (reactNode) {
        ReactDOM.render(<Main />, reactNode); // Render our Main componenent onto the DOM.
    }
}

documentReady();
```

_______

Once those files have been set up, you can run `webpack` in terminal. This should create the public/src/bundle.js file. Now by running `http-server` or `live-server` you should be able to navigate your browser to the address in your terminal and see a header of 'Test' on a red background.

Well done! Our basic front end structure is set up and ready to go. Next we'll be moving onto a backend skeleton.