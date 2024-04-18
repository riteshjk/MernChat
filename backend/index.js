import express from "express";
import connectDb from "./config/db.js";
import authRouter from "./Routes/auth.route.js"


const app = express();
app.use(express.json());

app.use("/api/auth",authRouter)

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

