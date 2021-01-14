/** Routes for authentication. */
import { Request, Response, NextFunction, Router } from 'express';
import User from '../models/user';
import createToken from '../services/createToken';

const router = Router();

router.post('/', function (req: Request, res: Response) {
  const user: any = req.body.user;

  interface UserDefaults {
    name: string;
    profileImg: string;
  }

  // object of user info for the database
  const userInfo: UserDefaults = {
    name: user.name,
    profileImg: user.picture,
  };

  // getting info about the user logged in and
  //   1. create the user if it does not exist
  //   2. fetch the user from the database if it does exist
  //   3. sending a jwt with user id for session
  User.findOrCreate({
    where: { facebookId: user.sub.split('|')[1] },
    defaults: userInfo,
  }).then(([user]) => {
    const token = createToken(user);
    res.json(token);
  });
});

export default router;
