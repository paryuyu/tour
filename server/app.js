
import express from "express";

const app = express();

import mongoose from "mongoose";
import review from "./route/review.js"

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
//TODO: env로 넣기
const target = process.env.MONGODB_URI;
mongoose.connect( target, {dbName:"tour"});


app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api/review", review)


app.listen(8080,()=>{
    console.log("severStart")
})