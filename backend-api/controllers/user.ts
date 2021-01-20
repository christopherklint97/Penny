/** Routes for authentication. */
import { Request, Response, Router } from 'express';
import User from '../models/user';

const router = Router();
// adds a user to the database
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
  User.findOrCreate({
    where: { facebookId: user.sub.split('|')[1] },
    defaults: userInfo,
  })
    .then(() => {
      res.json({ message: 'Authentication was successful.' });
    })
    .catch((e) => console.log(e));
});

export default router;
