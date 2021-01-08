/** Routes for authentication. */
const express = require('express');
const router = express.Router();
import createToken from '../helpers/createToken';
import passport from '../middleware/passport';

router.get('/facebook', passport.authenticate('facebook'));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail',
  }),
);

router.get('/fail', (req, res) => {
  res.send('Failed attempt');
});

router.get('/success', (req, res, next) => {
  try {
    const user = req.user;
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

export default router;
