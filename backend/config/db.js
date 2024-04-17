import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async() =>{
    mongoose.connect(process.env.MONGO_URL)
}

export default connectDb