import Review from './Review';

export default {
	  getReviews( req, res ) {
		Review.find({}, ( err, reviews ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(reviews);
			
		});
	  }

	, addReview( req, res ) {
		new Review(req.body).save(( err, review ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(201).send(review);
			
		});
	  }

	, getOneReview( req, res ) {
		Review.findById(req.params.reviewId, ( err, review ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(review);
			
		});
	  }

	, updateReview( req, res ) {
		Review.findByIdAndUpdate(req.params.reviewId, req.body, ( err, review ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(review);
			
		});
	  }

	, deleteReview( req, res ) {
		Review.findByIdAndRemove(req.params.reviewId, ( err, review ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(review);
			
		});
	}
}