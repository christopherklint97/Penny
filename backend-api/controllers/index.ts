/** Routes for authentication. */
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('This is a backend API for the Penny app.');
});

export default router;
