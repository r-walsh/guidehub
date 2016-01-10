import mongoose from 'mongoose';

const User = mongoose.Schema({
	  githubId: { type: String, required: true }
	, username: String
	, displayName: String
	, profileUrl: String
	, avatarUrl: String
	, email: String
	, permissions: {
		  admin: { type: Boolean, default: false }
		, moderator: { type: Boolean, default: false }
		, user: { type: Boolean, default: true }
	}
	, guides: {
		  authored: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }]
		, completed: [{ 
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
			, completedAt: { type: Date, required: true }
			, completedAt: { type: Date, required: true }
		  }]
		, favorited: [{ 
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
			, favoritedAt: { type: Date, required: true }
		  }]
		, inProgress: [{
			  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true }
			, author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
			, currentPage: { type: Number, default: 0 }
			, startedAt: { type: Date, required: true }
		  }]
	  }
	, reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

export default mongoose.model('User', User);