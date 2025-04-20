// import eventemitter class
const eventEmitter = require("events");
// create a instance of eventemitter

const emitter = new eventEmitter();

// define a event listenser (addlistenser)
// emitter.on("great", () => {
//   console.log("Hello shailendra");
// });
// // trigger (emit) the great (event)

// emitter.emit("great");

// you can also pass arguments while emitting

// emitter.on("great", (userName, prof) => {
//     console.log(`Hello ${userName}, you ar a ${prof}`);
//   });
//   // trigger (emit) the great (event)
  
//   emitter.emit("great", "shailendra", "shopify developer");

// best idea

emitter.on("great", (arg) => {
    console.log(`Hello ${arg.userName}, you ar a ${arg.prof}`);
  });
  // trigger (emit) the great (event)
  
  emitter.emit("great", {userName: "shailendra", prof: "shopify developer"});