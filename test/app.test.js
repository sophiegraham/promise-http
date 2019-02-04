const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app', () => {
  it('gets a character by id', () => {
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

  it('gets all characters', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick');
      });
  });

  it('saves a note to a character', () => {
    return request(app)
      .post('/character')
      .send({ characterId: 1, note: 'top character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('gets the notes for a character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'cool guy' })
      .then(() => {
        return request(app)
          .get('/characters/1');
      })
      .then(res => {
        expect(res.text).toContain('Great character');
      });
  });
});
