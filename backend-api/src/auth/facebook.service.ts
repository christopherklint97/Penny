import { Injectable } from '@nestjs/common';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import Passport from 'passport';
import { env } from 'process';
import { UserService } from 'src/users/users.service';

@Injectable()
export class FacebookService {
  constructor(
    private GoogleStrategy = Strategy,
    private userService: UserService,
  ) {}

  oauth() {
    Passport.use(
      new this.GoogleStrategy(
        {
          clientID: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
          callbackURL: env.GOOGLE_CALLBACK_URL,
        },
        this.verify,
      ),
    );
  }

  async verify(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    cb: VerifyCallback,
  ) {
    await this.userService.findOrCreateUser(
      {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        profileImg: profile.photos[0].value,
      },
      { name: profile.provider, id: profile.id },
    ),
      function (err, user) {
        return cb(err, user);
      };
  }
}
