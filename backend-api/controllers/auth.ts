/** Routes for authentication. */
import { Request, Response, NextFunction, Router } from 'express';
import createToken from '../helpers/createToken';
import passport from '../middleware/passport';

const router = Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail',
  }),
);

router.get('/fail', (req: Request, res: Response) => {
  res.send('Failed attempt');
});

router.get('/success', (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

export default router;
