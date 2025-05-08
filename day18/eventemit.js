
const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.on('dataReceived', (data) => {
  console.log('Received data:', data);
});



emitter.emit('dataReceived', "good morning");
