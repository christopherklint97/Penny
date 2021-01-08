import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

/** return signed JWT from user data. */

export default function createToken(user: any) {
  let payload = {
    fullName: user.fullName,
    email: user.email,
  };

  return jwt.sign(payload, SECRET_KEY);
}
