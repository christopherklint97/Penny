import { Request, Response, Router } from 'express';
import { getAllTrips, addTrip, getTrip } from '../services/trips';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const userId = req.query.userId;
  const result = await getAllTrips(userId as string);
  res.json(result);
});

router.post('/', async (req: Request, res: Response) => {
  const city = req.body.city;
  const userId = req.body.user.sub.split('|')[1];
  const result = await addTrip(city, userId);
  res.json(result);
});

router.get('/:id', async (req: Request, res: Response) => {
  const userId = req.query.userId;
  const tripId = Number(req.params.id);
  const result = await getTrip(userId as string, tripId as number);
  res.json(result);
});

export default router;
