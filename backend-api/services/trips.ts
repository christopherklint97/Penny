import Trip from '../models/trip';

async function addTrip(city: any, userId: string) {
  try {
    const trip = await Trip.create({
      cityName: city.cityName,
      cityId: city.cityId,
      photo: city.photo,
      lat: city.lat,
      lng: city.lng,
      userId: userId,
    });
    return trip;
  } catch (e) {
    console.log(e);
  }
}

async function getAllTrips(userId: string) {
  try {
    const trips = await Trip.findAll({ where: { userId } });
    return trips;
  } catch (e) {
    console.log(e);
  }
}

async function getTrip(userId: string, tripId: number) {
  try {
    const trip = await Trip.findOne({ where: { userId: userId, id: tripId } });
    return trip;
  } catch (e) {
    console.log(e);
  }
}

export { addTrip, getAllTrips, getTrip };
