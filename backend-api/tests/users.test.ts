import * as request from 'supertest';
import app from '../app';

describe('Controller /users', function () {
  test('/POST adds new user', async function () {
    const response = await request(app)
      .post(`/users`)
      .send({
        user: {
          sub: 'fb|123764GHDJAK',
          name: 'James Cameron',
          picture: 'www.avatar.me/ohyeah',
        },
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Authentication was successful.',
    });
  });
});
