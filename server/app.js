
import express from "express";
import mongoose from "mongoose";
import review from "./route/review.js"

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const target ="mongodb+srv://mernyuyu:wkdrnahr777@cluster0.qeg74yn.mongodb.net/test"
mongoose.connect( target, {dbName:"tour"});


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/review", review)


app.listen(8070,()=>{
    console.log("severStart")
})