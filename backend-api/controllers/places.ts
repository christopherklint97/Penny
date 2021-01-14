import { Request, Response, Router } from 'express';
import { searchForPlace } from '../services/googlePlaces';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const text = req.params.search;
  res.json(searchForPlace(text));
});

export default router;
