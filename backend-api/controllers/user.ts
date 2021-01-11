/** Routes for authentication. */
import { SECRET_KEY, FRONTEND_URL } from '../config';
import { Request, Response, NextFunction, Router } from 'express';
import User from '../models/user';

const router = Router();

router.get('/new', function (req: Request, res: Response) {
  req.header();
});

export default router;
