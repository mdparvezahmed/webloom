// const hello = require("./gree");

// const obj = require("./greeting.json")

// hello()
// console.log(obj.the)


// const Emitter = require("./events"); //custom events
const Emitter = require("events"); //core nodejs module
const events = require("./config").evnets;

const emiter = new Emitter();

// console.log(events)

emiter.on(events.GREET, function(){
    console.log("hi");
})
emiter.on(events.GREET, function(){
    console.log("greet occured")
})
emiter.on(events.FILEOPEN, function(){
    console.log("greet occured SUCCESSFULLY")
})

emiter.emit(events.GREET)

// console.log(obj)