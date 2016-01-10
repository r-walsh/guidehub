import mongoose from 'mongoose';

const User = mongoose.Schema({
	  githubId: { type: String, required: true }
	, username: String
	, displayName: String
	, profileUrl: String
	, avatarUrl: String
	, email: String
	, guides: {
		  authored: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }]
		, completed: [{ 
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
		  }]
		, favorited: [{ 
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
		  }]
		, inProgress: [{
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
			, currentPage: { type: Number, default: 0 }
		  }]
	}
});

export default mongoose.model('User', User);