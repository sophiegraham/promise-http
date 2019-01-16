const request = require('superagent');

const getCharacter = id => {
};

request
  .get('https://richandmortyapi.com/api/character/')
  .then(res => {
    return res.body.results
      .map(character => character)
      .filter;
  });

module.exports = {
  getCharacter
};
