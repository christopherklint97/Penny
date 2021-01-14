import { GOOGLE_MAPS_API_KEY } from '../config';
import axios from 'axios';

/** Google Places API services. */
async function searchForPlace(text: string) {
  const res = await axios.get(
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/',
    {
      params: {
        output: 'json',
        key: GOOGLE_MAPS_API_KEY,
        input: text,
        inputtype: 'textquery',
        fields: ['place_id', 'name', 'geometry', 'formatted_address', 'photos'],
      },
    },
  );
  return res.data;
}

export { searchForPlace };
