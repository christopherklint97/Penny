import Place from '../models/place';
import { getPlaceDetails, getPlaceId } from './googlePlaces';

async function addPlace(name: string, tripId: number) {
  try {
    const placeId = await getPlaceId(name);
    const place = await getPlaceDetails(placeId);
    const newPlace = await Place.create({
      name: place.name,
      place_id: place.place_id,
      photo: place.photos[0].photo_reference,
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      tripId: tripId,
    });
    return newPlace;
  } catch (e) {
    console.log(e);
  }
}

export { addPlace };
