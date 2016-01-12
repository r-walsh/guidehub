import passport from 'passport';

export default function( app ) {
	app.route('/auth/github')
		.get(passport.authenticate('github', { scope: 'email' }));

	app.route('/auth/callback')
		.get(passport.authenticate('github'), ( req, res ) => {
			if (!req.user) {
				return res.status(401).send('not allowed');
			}

			res.redirect('/#/profile');
		});
}