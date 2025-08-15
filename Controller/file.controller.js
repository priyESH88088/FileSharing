import fileSchema from "../Model/file.model.js";

const upload= async (req,res)=>{
console.log(req.file);
await fileSchema.create({
    originalname:req.file.originalname,
    modifiedname:req.file.filename,
    size:req.file.size,
    user:req.body.user,
    path:req.file.path
})
 res.json({
        success:true,
        message:"File Uploded Successfully"
    });
}

const share=async(req,res)=>{
  try{
    const link="http://localhost:8080/file/"+req.body._id;
    const file=await fileSchema.findById(req.body._id);
    console.log(file);
    if(!file){
        throw new Error("Invalid file id Searching");
     }
    
      return  res.json({
            success:true,
            message:"shared link generated",
            result: link
        });
   

  }
  catch(err){
  return res.
   status(404)
   .json({
    success:false,
    message:"Invalid Id"
   });
  }
}

const download = async (req, res) => {
    console.log(req.params.fileId);
    const detail = await fileSchema.findById(req.params.fileId); 

    if (!detail) {
        return res.status(404).json({ success: false, message: "File not found" });
    }

    console.log(detail.path);
    res.download(detail.path, detail.originalname); // ✅ changed "file" to "detail"
};


const fileController={
    upload,
    share,
   download
};

export default fileController;