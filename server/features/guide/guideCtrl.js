import Guide from './Guide.js';

export default {
	  getApprovedGuides( req, res ) {
		Guide.find({}, ( err, guides ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(guides);
			
		});
	  }

	, postGuide( req, res ) {
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
			
			return res.status(200).send(guide);
			
		});
	  }

	, updateGuide( req, res ) {
		Guide.findByIdAndUpdate(req.params.guideId, req.body, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			return res.status(200).send(guide);
			
		});
	  }

	, deleteGuide( req, res ) {
		Guide.findById(req.params.guideId, ( err, guide ) => {
			if (err) {
				return res.status(500).send(err);
			}
			
			if (req.user._id !== guide.author && (!req.user.admin || !req.user.moderator)) {
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