import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Passport from 'passport';
import { GoogleService } from 'src/auth/google.service';

@Injectable()
export class PassportGoogle implements NestMiddleware {
  constructor(private googleService: GoogleService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Configure the Google strategy for use by Passport
    this.googleService.oauth();

    // Authenticate login with Google
    Passport.authenticate('google', { scope: 'profile' });
    next();
  }
}

@Injectable()
export class PassportGoogleCallback implements NestMiddleware {
  constructor(private googleService: GoogleService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Configure the Google strategy for use by Passport
    this.googleService.oauth();

    // Handle redirect for callback
    Passport.authenticate('google', { failureRedirect: '/login' });
    next();
  }
}
