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
		Review.findById(req.params.reviewId, ( err, review ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			if (review.reviewerId !== req.user._id && (req.user.permissions.admin || req.user.permissions.moderator)) {
				return res.status(403).send('Forbidden');
			}

			review.delete(( err, deletedReview ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				return res.status(200).send(deletedReview);
				
			});
			
		});
	}
}