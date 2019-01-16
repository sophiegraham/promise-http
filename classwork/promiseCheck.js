const fsPromises = require('fs').promises;

module.exports = toCheck => {
  return typeof toCheck === 'object' &&
};