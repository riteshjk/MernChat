import express from "express";
import connectDb from "./config/db.js";

const app = express();

app.listen(3000, async() => {
    try{
        await connectDb()
        console.log("connected to database successfully");
        console.log("server is running on port 3000");
    }
    catch(err){
        console.log(err,"failed to connect to database");
    }
   
})

