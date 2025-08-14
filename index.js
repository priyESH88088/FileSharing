import express from "express";
import router from "./Route/file.route.js";

const app=express();
app.use("/api/v1/file",router);
app.listen(8080,()=>{
    console.log("Server up and running at port 8080");
})