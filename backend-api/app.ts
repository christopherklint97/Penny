/** Express app for penny. */
import { NextFunction, Request, Response } from 'express';

import ExpressError from './helpers/expressError';

// import usersRoutes from './controllers/users';
import authRoutes from './controllers/auth';
import mainRoutes from './controllers/main';

import sequelize from './models/db';
import passport from './middleware/passport';

import * as express from 'express';
const app = express();

// sync database
(async () => await sequelize.sync({ force: true }))();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.use('', mainRoutes);

/** 404 handler */

app.use(function (req: Request, res: Response, next: NextFunction) {
  const err = new ExpressError('Not Found', 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (
  err: ExpressError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message,
  });
});

export default app;
