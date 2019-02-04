const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    return res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    return Promise.all(originUrls.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => {
    return originRess.map(originRess => originRess.body);
  })
  .then(origins => {
    console.log(origins);
  })
  .catch(err => console.error(err));
