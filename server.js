'use strict';
// node_module imports
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


// Config
const port = 3030;
const mongoUri = 'mongodb://localhost:27017/guidehub';
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB at ' + mongoUri);
});


// Routes
import userRoute from './server/features/user/userRoutes';

userRoute(app);


// Create server
app.listen(port, () => {
	console.log('Listening on ' + port);
});