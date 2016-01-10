import mongoose from 'mongoose';

let Review = new mongoose.Schema({
	  reviewer: { type: String, required: true }
	, reviewerId: { type: mongoose.Schema.Types.ObjectId, required: true }
	, content: String
	, rating: { type: Number, required: true }
	, reviewedAt: { type: Date, required: true }
});

export default mongoose.model('Review', Review);