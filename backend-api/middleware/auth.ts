/** Convenience middleware to handle common auth cases in routes. */

import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import ExpressError from '../helpers/expressError';

/** Middleware to use when they must provide a valid token.
 *
 * Add username onto req as a convenience for view functions.
 *
 * If not, raises Unauthorized.
 *
 */

function authRequired(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenStr = req.body._token || req.query._token;

    let token = jwt.verify(tokenStr, SECRET_KEY);
    res.locals.username = token.username;
    return next();
  } catch (err) {
    return next(new ExpressError('You must authenticate first', 401));
  }
}

/** Middleware to use when they must provide a valid token & be user matching
 *  username provided as route param.
 *
 * Add username onto req as a convenience for view functions.
 *
 * If not, raises Unauthorized.
 *
 */

function ensureCorrectUser(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenStr = req.body._token;

    let token = jwt.verify(tokenStr, SECRET_KEY);
    res.locals.username = token.username;

    if (token.username === req.params.username) {
      return next();
    }

    // throw an error, so we catch it in our catch, below
    throw new Error();
  } catch (err) {
    return next(new ExpressError('Unauthorized', 401));
  }
}

export { authRequired, ensureCorrectUser };
