import { Request, Response, Router } from 'express';
import { addPlace } from '../services/places';
import { getPlaceDetails } from '../services/googlePlaces';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const name = req.body.name;
  const tripId = Number(req.body.tripId);
  const result = await addPlace(name as string, tripId as number);
  res.json(result);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getPlaceDetails(id as string);
  res.json(result);
});

export default router;
