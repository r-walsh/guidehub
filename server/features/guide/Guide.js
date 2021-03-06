import mongoose from 'mongoose';

const Guide = new mongoose.Schema({
	  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
	, title: { type: String, required: true }
	, content: { type: String, required: true }
	, tags: [String]
	, difficulty: { type: Number, min: 1, max: 10 }
	, authoredAt: { type: Date, required: true }
	, approved: { type: Boolean, default: false }
	, inProgress: { type: Number, default: 0 }
	, favorites: { type: Number, default: 0 }
	, completions: { type: Number, default: 0 }
	, rating: { type: Number, default: 0 }
	, reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

export default mongoose.model('Guide', Guide);