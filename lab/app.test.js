const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service.rickAndMortyApi.js', () => ({
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  }
}));
describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name : 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
