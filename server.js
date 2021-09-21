//Importing Stuff
const express =require("express");
const socket=require("socket.io");

//App Stuff
const app=express();
const server=app.listen(3000,()=>{console.log("Server Started")});

app.use(express.static("public"));




//Socket io
var io=socket(server);


io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });

    // Handle typing event
socket.on('typing', function(data){
    socket.broadcast.emit('typing', data); //Broadcasting means emitting event to all clients except from where this typing en=evt was fired
});

});






