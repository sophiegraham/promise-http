const fsPromises = require('fs').promises;


fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.error(err));

fsPromises.writeFile('test.txt', 'Data to write')
  .then(() => console.log('DONE!'))
  .catch(err => console.error('ERROR'));

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => fsPromiseswriteFile('test.txt', 'Data to write')
  .then(data => console.log(data))
  .catch(err => console.error(err));


