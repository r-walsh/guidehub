import ctrl from './reviewCtrl';

export default function( app ) {
	app.route('/api/reviews')
		.get(ctrl.getReviews)
		.post(ctrl.addReview)

	app.route('/api/review/:reviewId')
		.get(ctrl.getOneReview)
		.put(ctrl.updateReview)
		.delete(ctrl.deleteReview)
}