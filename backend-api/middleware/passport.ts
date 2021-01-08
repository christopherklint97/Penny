import User from '../models/user';
const passport = require('passport');
import { Strategy } from 'passport-facebook';
import ExpressError from '../helpers/expressError';

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(
  new Strategy(
    {
      clientID: process.env['FACEBOOK_CLIENT_ID'],
      clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
      callbackURL: '/auth/facebook/callback',
    },
    async function (accessToken, refreshToken, profile, done) {
      // The Facebook profile should be associated
      // with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      await User.findOrCreate({
        where: {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          profileImg: profile.photos[0].value,
          facebookId: profile.id,
        },
      })
        .then((result) => {
          const [user, created] = result;
          if (created) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'The user was not created' });
          }
        })
        .catch((err: Error) => {
          return done(
            new ExpressError(
              'Something went wrong with Facebook authentication',
              500,
            ),
          );
        });
    },
  ),
);

export default passport;
