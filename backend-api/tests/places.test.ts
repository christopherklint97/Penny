import Trip from '../models/trip';
import * as request from 'supertest';
import app from '../app';
import Place from '../models/place';
import User from '../models/user';

describe('Controller /places', function () {
  beforeEach(async () => {
    await User.create({
      facebookId: '1234GHDJAK',
      name: 'Taylor Brooks',
      profileImg: 'www.example.com/profile',
    });
    await Trip.create({
      id: 1,
      cityName: 'Utopia',
      cityId: '12345GHAJS',
      photo: 'www.example.com/photo',
      lat: 25,
      lng: 50,
      userId: '1234GHDJAK',
    });
    await Place.create({
      name: 'Champs',
      place_id: '12748HAUEO',
      photo: 'PHOTOREF4749',
      lat: 26,
      lng: 42,
      tripId: 1,
    });
  });

  afterEach(async () => {
    const user = await User.findByPk('1234GHDJAK');
    user.destroy();
  });

  test('/POST Adds a new place', async function () {
    const response = await request(app).post(`/places`).send({
      name: 'Eiffel Tower',
      tripId: '1',
    });
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('/GET Receives info about a place', async function () {
    const response = await request(app).get(`/places/1`).send();
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('/DELETE Deletes a place', async function () {
    const response = await request(app).delete(`/places/1`).send();
    expect(response.status).toBe(200);
  });
});
