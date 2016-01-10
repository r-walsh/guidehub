import ctrl from './guideCtrl'

export default function( app ) {
	app.route('/api/guide')
		.get(ctrl.getApprovedGuides)
		.post(ctrl.postGuide)

	app.route('/api/guide/:guideId')
		.get(ctrl.getOneGuide)
		.put(ctrl.updateGuide)
		.delete(ctrl.deleteGuide)

	app.route('/api/admin/guide/:guideId')
		.put(ctrl.changeApproval)
}