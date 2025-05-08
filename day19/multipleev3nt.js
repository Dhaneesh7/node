const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('greetEvent', (data) => {
  if (data.action === 'login') {
    console.log(`User ${data.username} has logged in.`);
  }
});


emitter.on('thankEvent', (data) => {
  
    console.log("thank you"+ data);
  
});


emitter.on('errorEvent', (error) => {
  console.error(`Error occurred: ${error.message}`);
});


emitter.emit('greetEvent','alex');
emitter.emit('thankEvent','alex');
emitter.emit('errorEvent',"Something went wrong");
