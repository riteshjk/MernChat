import { Server } from "socket.io";
import http from "http";
import express from "express";



const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:5000"],
        methods:["GET","POST"]
    }
});

const userSocketMap = {}  //{usereId:socketId}

io.on("connection",(socket)=>{
    console.log("connected with socket id: ",socket.id);

    const usereId = socket.handshake.query.userId;
    if(usereId != "undefined") userSocketMap[usereId] = socket.id;

    // io.emit() is used to send events to all connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",(socket)=>{
        console.log("disconnected with socket id: ",socket.id);
        delete userSocketMap[usereId];  //removing the socket id from the userSocketMap
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})



export {app,server,io}