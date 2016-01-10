## Step Two: Configuring Babel and setting up the backend skeleton.

### Configuring Babel for backend code.
We're going to be writing the backend for this project in Node, Express, and ES6. Rather than compiling and saving all of this code using a build system we're going to be using Babel's require hook, via babel-register.

Babel-register allows us to compile our backend code on the fly when the server starts, eliminating the need for something like Webpack. Using babel-register is simple, start by creating a new file named 'index.js' in the root directory of your project. We only need two lines of code in this file.

index.js:
```javascript
require('babel-core/register');
require('./server.js');
```
Now when we run our Node server on index.js babel-register takes over and compiles all of our server-side code that it finds in server.js (which we will be creating shortly).

Our next step is to make a slight adjustment to our package.json. We just need to tell Babel what to do when the server is run, we do this by adding a new key to the package.json object.

package.json:
```json
"babel": {
    "presets": ["babel-presets-es2015"]
}
```

Last step is to actually create and fill out our server.js file. If you are not yet familiar with Node and Express I recommend stopping here to familiarize yourself, as I won't be walking through every step in the basic server setup.

server.js:
```javascript
// node_module and config imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';


// Config
const port = 3030;
const mongoUri = 'mongodb://localhost:27017/guidehub';
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


// mongoose setup
mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB at ' + mongoUri);
});


// Create server
app.listen(port, () => {
    console.log('Listening on ' + port);
});
```

You should now be able to run `node index.js` (I highly recommend downloading and using nodemon in place of node. It will automatically restart the server for you on changes.) in your terminal and navigate to localhost:3030 to see your app running.

### Setting up our backend skeleton
Let's start by creating a 'config.js' file inside of our server/config/ folder. This file will need to export an object containing your session secret, GitHub Client ID, and GitHub Client Secret. (If you haven't yet set up a developer application, it's easy! Just go to [their website](https://github.com/settings/applications/new) and fill out the information.)

config.js
```javascript
export default {
      clientID: 'YOUR_CLIENT_ID'
    , clientSecret: 'YOUR_CLIENT_SECRET'
    , callbackURL: 'http://localhost:3030/auth/callback'
    , sessionSecret: 'keyboard cat'
}
```

Please note that it is __very__ important that you add this file to your .gitignore if you are using GitHub. You do not want you application secrets floating around publicly available.

