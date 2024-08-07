//const express = require('express')  //method1 for importing
import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoutes.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

const PORT=process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
  }));
  

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// routes

app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

// http://localhost:8000/api/v1/user/register




app.listen( PORT, ()=>{
    connectDB();
   console.log(`Server listen at port ${PORT}`);
})




