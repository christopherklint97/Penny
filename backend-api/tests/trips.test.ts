import Trip from '../models/trip';
import * as request from 'supertest';
import app from '../app';
import Place from '../models/place';
import User from '../models/user';

describe('Controller /trips', function () {
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
    await Trip.create({
      id: 2,
      cityName: 'Downtown',
      cityId: '7645GAH',
      photo: 'www.example.com/photo2',
      lat: 26,
      lng: 49,
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

  test('/GET get all trips', async function () {
    const response = await request(app).get(`/trips?userId=1234GHDJAK`).send();
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('/POST Adds a new trip', async function () {
    const response = await request(app)
      .post(`/trips`)
      .send({
        city: {
          cityName: 'Las Vegas',
          cityId: '8493ABAB',
          photo: '7438274BHHAHHA',
          lat: 55,
          lng: 53,
        },
        user: { sub: 'fb|1234GHDJAK' },
      });
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('/GET Receives info about a trip', async function () {
    const response = await request(app)
      .get(`/trips/1?userId=1234GHDJAK`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

  test('/DELETE Deletes a trip', async function () {
    const response = await request(app)
      .delete(`/trips/1`)
      .send({ userId: '1234GHDJAK' });
    expect(response.status).toBe(200);
  });
});
