import mongoose from "mongoose";

const FileSchema=new mongoose.Schema({
    originalname:{
        type:String,
        required:true
    },
    modifiedname:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const fileSchema=mongoose.model("file",FileSchema);

export default fileSchema;