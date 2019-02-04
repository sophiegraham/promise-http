const bodyParser = require('../lib/bodyParser');
const EventEmitter = require('events');

describe('bodyParser', () => {
  it('parses a request body', () => {
    const req = new EventEmitter();
    req.headers = {
      'content-type': 'application/json'
    };
    req.method = 'POST';

    const promise = bodyParser(req)
      .then(json => {
        expect(json).toEqual({ 1: ['My favorite character'] });
      });
    
    req.emit('data', JSON.stringify({ 1: ['My favorite character'] }));
    req.emit('end');

    return promise;
  });
});
