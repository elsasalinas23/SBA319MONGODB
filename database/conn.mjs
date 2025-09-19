import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectionStr = process.env.mongoURI || "";

async function connectDB (){
    try{
        await mongoose.connect(process.env.mongoURI);
        console.log(`Connected to MongoDB...`);
    }catch (err){
        console.error(err.message);
    }
}

export default connectDB;