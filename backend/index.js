import express from "express";
import connectDb from "./config/db.js";
import authRouter from "./Routes/auth.route.js";
import messageRouter from "./Routes/message.route.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routes/users.route.js";
import { app, server } from "./socket/socket.js";



app.use(express.json());   // to parse the json data in the request body
app.use(cookieParser());



app.use("/api/auth",authRouter)
app.use("/api/message",messageRouter)
app.use("/api/users",userRouter)


server.listen(3000, async() => {
    try{
        await connectDb()
        console.log("connected to database successfully");
        console.log("server is running on port 3000");
    }
    catch(err){
        console.log(err,"failed to connect to database");
    }
   
})

