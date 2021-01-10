/** Convenience middleware to handle common auth cases in routes. */

import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import ExpressError from '../helpers/expressError';

interface JwtToken {
  id: string;
  firstName: string;
  lastName: string;
}

/** Middleware to use when they must provide a valid token.
 *
 * Add username onto req as a convenience for view functions.
 *
 * If not, raises Unauthorized.
 *
 */

async function authRequired(req: Request, res: Response, next: NextFunction) {
  try {
    const tokenStr = req.body._token || req.query._token;

    const token = jwt.verify(tokenStr, SECRET_KEY) as JwtToken;
    res.locals.id = token.id;
    return next();
  } catch (err) {
    return next(new ExpressError('You must authenticate first', 401));
  }
}

export default authRequired;
