import { GOOGLE_MAPS_API_KEY } from '../config';
import axios from 'axios';

/** Google Places API services. */
async function getPlaceDetails(id: string) {
  try {
    const res = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          place_id: id,
          fields: [
            'place_id',
            'name',
            'geometry',
            'formatted_address',
            'photo',
            'rating',
          ],
        },
      },
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

async function getPlaceId(name: string) {
  try {
    const res = await axios.get(
      'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          input: name,
          inputtype: 'textquery',
          fields: ['place_id'],
        },
      },
    );
    return res.data.candidates[0].place_id;
  } catch (e) {
    console.log(e);
  }
}

async function getCities(text: string) {
  try {
    const res = await axios.get(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          input: text,
          types: '(cities)',
        },
      },
    );
    return res.data.predictions;
  } catch (e) {
    console.log(e);
  }
}

export { getPlaceDetails, getCities, getPlaceId };
