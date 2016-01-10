import { Strategy as githubStrategy } from 'passport-github';
import User from '../features/user/User';
import config from './config';

export default function( passport ) {

	passport.serializeUser(( user, done ) => {
		done(null, user);
	});

	passport.deserializeUser(( obj, done ) => {
		done(null, obj);
	});

	passport.use(new githubStrategy({
		  clientID: config.clientID
		, clientSecret: config.clientSecret
		, callbackURL: config.callbackURL
	}, ( accessToken, refreshToken, profile, done ) => {
		User.findOne({ githubId: profile.id }, ( err, user ) => {
			if (err) {
				return done(err);
			}

			if (user) {
				return done(null, user);
			}

			var newUser = new User();

			newUser.githubId = profile.id;
			newUser.username = profile.username;
			newUser.profileUrl = profile.profileUrl;
			newUser.displayName = profile._json.name;
			newUser.avatarUrl = profile._json.avatar_url;
			newUser.email = profile._json.email;

			return done(null, newUser);
		});
	}));
}