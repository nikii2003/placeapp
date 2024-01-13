import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import beach from './src/models/beach.js';
dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

const connectDB =  async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("mongodb conected !")
    }
}
connectDB()

app.post('/api/v1/beaches',async(req,res)=>{
    const {name}=req.body
    const beachdata = new beach ({
    name : name
    })
    const savedbeachdata = await beachdata.save()
    res.json({
        success : true,
        data : savedbeachdata,
        message : "successfully created"
    })
})
app.listen (PORT ,()=>{
    console.log("server is runing on port 5000")
})