const EventEmitter=require("node:events");
const emitter=new EventEmitter();
emitter.on("start",()=>{
    console.log("Event triggered");
    
});
emitter.emit("start");
