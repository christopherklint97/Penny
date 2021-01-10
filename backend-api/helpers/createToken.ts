import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import User from '../models/user';

/** return signed JWT from user data. */

export default function createToken(user: User) {
  let payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '2d' });
}
