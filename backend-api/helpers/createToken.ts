import * as jwt from 'jsonwebtoken';
import User from 'models/user';
import { SECRET_KEY } from '../config';

/** return signed JWT from user data. */

function createToken(user: User) {
  let payload = {
    id: user.id,
    name: user.name,
  };

  return jwt.sign(payload, SECRET_KEY);
}

export default createToken;
