const fs = require('fs');

const readPromises = src => new Promise((resolve, reject) => {
  
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err);
    resolve(data);
  });
});

readPromises('./http.md')
  .then(data => console.log(data));
  
