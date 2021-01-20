import { Request, Response, Router } from 'express';
import { addPlace, deletePlace } from '../services/places';
import { getPlaceDetails } from '../services/googlePlaces';

const router = Router();

// adds new place
router.post('/', async (req: Request, res: Response) => {
  const placeName = req.body.name;
  const tripId = Number(req.body.tripId);
  const result = await addPlace(placeName as string, tripId as number);
  res.json(result);
});

// gets details about a place
router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getPlaceDetails(id as string);
  res.json(result);
});

// deletes a place
router.delete('/:id', async (req: Request, res: Response) => {
  const placeId = Number(req.params.id);
  await deletePlace(placeId as number);
  res.json('Success');
});

export default router;
