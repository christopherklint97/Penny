/** Express app for penny. */
import { NextFunction, Request, Response } from 'express';

import ExpressError from './helpers/expressError';

// import usersRoutes from './controllers/users';
import authRoutes from './controllers/auth';

import sequelize from './models/db';
import passport from './middleware/passport';

const express = require('express');
const app = express();

// sync database
(async () => await sequelize.sync({ force: true }))();

//  Use application-level middleware for common functionality, including
// logging, parsing, and passport.
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

// app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

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
