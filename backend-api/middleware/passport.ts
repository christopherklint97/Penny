import User from '../models/user';
import * as passport from 'passport';
import { Strategy } from 'passport-facebook';
import ExpressError from '../helpers/expressError';
import { BACKEND_URL } from '../config';

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
      callbackURL: `${BACKEND_URL}/auth/facebook/callback`,
      profileFields: ['name', 'photos'],
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

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.
passport.serializeUser(function (user: User, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id: number, done) {
  const user = User.findByPk(id);
  done(null, user);
});

export default passport;
