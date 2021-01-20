import Place from '../models/place';
import { getPlaceDetails, getPlaceId } from './googlePlaces';

async function addPlace(name: string, tripId: number) {
  try {
    const placeId = await getPlaceId(name);
    const place = await getPlaceDetails(placeId);
    const newPlace = await Place.create({
      name: place.result.name,
      place_id: place.result.place_id,
      photo: place.result.photos[0].photo_reference,
      lat: place.result.geometry.location.lat,
      lng: place.result.geometry.location.lng,
      tripId: tripId,
    });
    return newPlace;
  } catch (e) {
    console.log(e);
  }
}

async function deletePlace(placeId: number) {
  try {
    const place = await Place.findOne({
      where: { id: placeId },
    });
    await place.destroy();
  } catch (e) {
    console.log(e);
  }
}

export { addPlace, deletePlace };
