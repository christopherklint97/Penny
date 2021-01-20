import * as request from 'supertest';
import app from '../app';

describe('Controller /cities', function () {
  test('Gets cities', async function () {
    const response = await request(app).get(`/cities?search=London`).send();
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });
});
