/** Convenience middleware to handle common auth cases in routes. */

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from 'models/user';
import { SECRET_KEY } from '../config';
import ExpressError from '../helpers/expressError';

/** Middleware to use when they must provide a valid token.
 *
 * Add username onto req as a convenience for view functions.
 *
 * If not, raises Unauthorized.
 *
 */

export default async function authRequired(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const tokenStr: string = req.body.idToken;

    let token: any = jwt.verify(tokenStr, SECRET_KEY);
    res.locals.user = await User.findByPk(token.id);
    return next();
  } catch (err) {
    return next(new ExpressError('You must authenticate first', 401));
  }
}
