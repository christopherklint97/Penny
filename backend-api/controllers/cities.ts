import { Request, Response, Router } from 'express';
import { getCities } from '../services/googlePlaces';

const router = Router();

// gets all cities
router.get('/', async (req: Request, res: Response) => {
  const text = req.query.search;
  const result = await getCities(text as string);
  res.json(result);
});

export default router;
