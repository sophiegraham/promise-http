const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/tester')
      .query({ name:'sophie' })
      .then(res => {
        expect(res.text).toEqual({ hi: 'there sophie' });
      });
  });
});
