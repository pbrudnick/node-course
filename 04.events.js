const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('arrancaElPartido', () => {
  console.log('Arrancó el partido!');
});

myEmitter.on('entretiempo', () => {
  console.log('Los equipos se van al descanso...');
});

myEmitter.on('finDelPartido', () => {
  console.log('Y se ha terminado Macaya!');
});

// emiting events
myEmitter.emit('arrancaElPartido');

setTimeout(() => {
  myEmitter.emit('entretiempo');

  setTimeout(() => {
    myEmitter.emit('finDelPartido');
  }, 5000);
}, 5000);