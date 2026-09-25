const request = require('supertest');
const server = require('../server');

describe('GET /get API Test', () => {

  test('Should return Hello message', async () => {

    const response = await request(server)
      .get('/get');

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      Hello: 'say hello'
    });

  });

});