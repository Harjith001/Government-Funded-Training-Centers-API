import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI) throw new Error('DB URI not found');

const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connection successful");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToDatabase;