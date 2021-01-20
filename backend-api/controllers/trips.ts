import { Request, Response, Router } from 'express';
import { getAllTrips, addTrip, getTrip, deleteTrip } from '../services/trips';

const router = Router();

// gets all trips
router.get('/', async (req: Request, res: Response) => {
  const userId = req.query.userId;
  const result = await getAllTrips(userId as string);
  res.json(result);
});

// adds a trip
router.post('/', async (req: Request, res: Response) => {
  const city = req.body.city;
  const userId = req.body.user.sub.split('|')[1];
  const result = await addTrip(city, userId);
  res.json(result);
});

// gets a trip
router.get('/:id', async (req: Request, res: Response) => {
  const userId = req.query.userId;
  const tripId = Number(req.params.id);
  const result = await getTrip(userId as string, tripId as number);
  res.json(result);
});

// deletes a trip
router.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const tripId = Number(req.params.id);
  await deleteTrip(userId as string, tripId as number);
  res.json('success');
});

export default router;
