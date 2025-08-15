import express from "express";
import mongoose from "mongoose";
import router from "./Route/file.route.js";

mongoose.connect('mongodb://127.0.0.1:27017/FileSharing')
.then(()=>console.log("Db Connected Successfully"))
.catch(err=>console.log("Error in connecting",err));

const app=express();
app.use(express.json());
app.use(router);
app.listen(8080,()=>{
    console.log("Server up and running at port 8080");
});