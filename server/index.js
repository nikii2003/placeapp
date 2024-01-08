import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const connectDB =  async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("mongodb conected !")
    }
}
connectDB()

app.listen (PORT ,()=>{
    console.log("server is runing on port 5000")
})