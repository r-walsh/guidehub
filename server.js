// node_module and config imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import config from './server/config/config.js';


// Config
const port = 3030;
const mongoUri = 'mongodb://localhost:27017/guidehub';
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({
	  secret: config.sessionSecret
	, resave: false
	, saveUninitialized: false
}));


// passport setup
import passportConfig from './server/config/passport.js';
passportConfig(passport);

app.use(passport.initialize());
app.use(passport.session());


// mongoose setup
mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB at ' + mongoUri);
});


// Routes
import authRoutes from './server/features/auth/authRoutes';
import userRoutes from './server/features/user/userRoutes';
import guideRoutes from './server/features/guide/guideRoutes';

authRoutes(app);
userRoutes(app);
guideRoutes(app);


// Create server
app.listen(port, () => {
	console.log('Listening on ' + port);
});