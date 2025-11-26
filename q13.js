const EventEmitter=require("node:events");
const emitter=new EventEmitter();
emitter.on("login",(username)=>{
   console.log(`Welcome ${username}`);
   
});
emitter.emit("login","Mostafa");