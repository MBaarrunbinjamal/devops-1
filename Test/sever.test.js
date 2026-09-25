const request = require('supertest');
const server = require('./server');

describe('GET /get API', () => {

  test('Should return status code 200', async () => {
    const response = await request(server).get('/get');

    expect(response.statusCode).toBe(200);
  });

  test('Should return correct JSON response', async () => {
    const response = await request(server).get('/get');

    expect(response.body).toEqual({
      Hello: 'say hello'
    });
  });

  test('Should contain Hello property', async () => {
    const response = await request(server).get('/get');

    expect(response.body).toHaveProperty('Hello');
  });

  test('Should return correct content type', async () => {
    const response = await request(server).get('/get');

    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('Should not allow POST request on /get', async () => {
    const response = await request(server).post('/get');

    expect(response.statusCode).toBe(404);
  });

});