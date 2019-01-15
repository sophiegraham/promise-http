const copy = require('./classwork/copy');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy.md');
  });

  it('copies a file', () => {
    return copy('./http.md', './http-copy.md')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([httpMd, httpCopyMd]) => {
        expect(httpMd).toEqual(httpCopyMd);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});

