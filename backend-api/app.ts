/** Express app for penny. */
import { NextFunction, Request, Response } from 'express';
import ExpressError from './helpers/expressError';
// import usersRoutes from './controllers/users';
import userRoutes from './controllers/user';
import mainRoutes from './controllers/index';
import sequelize from './models/db';
import * as jwt from 'express-jwt';
import * as jwks from 'jwks-rsa';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as express from 'express';
import { FRONTEND_URL } from './config';
const app = express();

// sync database
(async () => await sequelize.sync({ force: true }))();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// JWT token is checked using middleware
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-5p5e86yy.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://penny.api.christopherklint.com/',
  issuer: 'https://dev-5p5e86yy.eu.auth0.com/',
  algorithms: ['RS256'],
});
app.use(jwtCheck);

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// app.use('/users', usersRoutes);
app.use('/users', userRoutes);
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
