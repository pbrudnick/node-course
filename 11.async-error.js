const fs = require('fs');

console.log('arranco a leer el archivo...');

fs.readFile('not_existent_file', 'utf-8', function (err, content) {
  if (err) {
    console.log('Uuhps!', err);
    return;
  }

  console.log(content);
})

console.log('terminó de leer el archivo... (<seguro>?)');