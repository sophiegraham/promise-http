const fsPromises = require('fs').promises;

const read = src => fsPromises.readFile(src, { encoding 'utf8' });
const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const makeAllLetterCapital = str => str.toUpperCase();
const reverse = str => str.split('').reverse().join('');
const trim = str => str.trim();
const transformer = src => {
  return fsPromises.readFile(src, { encoding: 'utf 8' })
    .then(removeCapitals)
    .then(makeAllLetterCapital)
    .then(reverse)
    .then(trim);

};

module.exports = {
  transformer,
  removeCapitals,
  makeAllLetterCapital,
  reverse,
  trim

};

