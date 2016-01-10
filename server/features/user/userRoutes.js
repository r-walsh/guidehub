import ctrl from './userCtrl';

export default function( app ) {
	app.route('/api/user')
		.get(ctrl.getUser);
}