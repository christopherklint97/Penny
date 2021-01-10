/** Routes for authentication. */
import { SECRET_KEY, FRONTEND_URL } from '../config';
import { Request, Response, NextFunction, Router } from 'express';
import createToken from '../helpers/createToken';
import passport from '../middleware/passport';
import User from '../models/user';

const router = Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: `${FRONTEND_URL}/api/jwt`,
    failureRedirect: '/auth/fail',
  }),
);

router.get('/fail', (req: Request, res: Response) => {
  res.send('Failed attempt');
});

router.post('/success', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  console.log(SECRET_KEY);
  if (req.body.secret === SECRET_KEY) {
    const token = createToken(req.user as User);
    return res.json({ token });
  }

  return res.json({ message: 'JWT token failed due to incorrect secret' });
});

export default router;
