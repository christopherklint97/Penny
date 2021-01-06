import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-google-oauth20';
import Passport from 'passport';
import { env } from 'process';
import { UserService } from 'src/users/users.service';

@Injectable()
export class GoogleService {
  constructor(private GoogleStrategy = Strategy) {}

  googleOauth() {
    Passport.use(
      new this.GoogleStrategy(
        {
          clientID: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
          callbackURL: env.GOOGLE_CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, cb) {
          await UserService.findOrCreateUser(
            {
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              profileImg: profile.photos[0].value,
            },
            { provider: profile.provider, id: profile.id },
          ),
            function (err, user) {
              return cb(err, user);
            };
        },
      ),
    );
  }
}
