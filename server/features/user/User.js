import mongoose from 'mongoose';

const User = mongoose.Schema({
	  githubId: { type: String, required: true }
	, username: String
	, displayName: String
	, profileUrl: String
	, avatarUrl: String
	, email: String
});

export default mongoose.model('User', User);