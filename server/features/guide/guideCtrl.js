import Guide from './Guide.js';

export default {
	  getApprovedGuides( req, res ) {
		Guide.find()
			.populate('author', 'reviews')
			.exec()
			.then(( guides, err ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				return res.status(200).send(guides);

			});
	  }

	, postGuide( req, res ) {
		if (!req.user) {
			return res.status(401).send('Unauthorized, please log in.');
		}
		
		new Guide(req.body).save(( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(201).send(guide);
			
		});
	  }

	, getOneGuide( req, res ) {
		Guide.findById(req.params.guideId, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			guide.populate('author', 'reviews')
				.exec()
				.then(( guide, err ) => {
					if (err) {
						return res.status(500).send(err);
					}
					
					return res.status(200).send(guide);

				});
			
		});
	  }

	, updateGuide( req, res ) {
		Guide.findById(req.params.guideId, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}

			if (req.user._id !== guide.author) {
				return res.status(403).send('Forbidden');
			}
			
			guide.update(req.body, ( err, updatedGuide ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				return res.status(200).send(guide);

			});
			
		});
	  }

	, deleteGuide( req, res ) {
		Guide.findById(req.params.guideId, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			if (req.user._id !== guide.author && (!req.user.permissions.admin || !req.user.permissions.moderator)) {
				return res.status(403).send('Forbidden');
			}

			guide.delete(( err, deletedGuide ) => {
				if (err) {
					return res.status(500).send(err);
				}
				
				return res.status(200).send(deletedGuide);
				
			});
			
		});
	  }

	, changeApproval( req, res ) {
		Guide.findById(req.params.guideId, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			if (!req.user.permissions.admin || !req.user.permissions.moderator) {
				return res.status(403).send('Forbidden');
			}

			guide.set('approved', req.body.approved)
				.save(( err, updatedGuide ) => {
					if (err) {
						return res.status(500).send(err);
					}
					
					return res.status(200).send(updatedGuide);
					
				});
		});
	}
}