const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Register an event handler for the 'greeting' event
myEmitter.on('greeting',(name) => {
    console.log(`Hello ${name}!`);
})
myEmitter.emit('greeting','Siva Kumar')


// class MyEmitter extends EventEmitter {}

// // Create an instance of MyEmitter
// const exmyEmitter = new MyEmitter();

// // Register an event handler for the 'custom' event
// exmyEmitter.on('custom', (arg) => {
//   console.log(`Custom event triggered with argument: ${arg}`);
// });

// // Emit the 'custom' event
// exmyEmitter.emit('custom', 'example argument');
