
const upload=(req,res)=>{
    res.json({
        success:true,
        message:"File Uploded Successfully"
    });
}

const share=(req,res)=>{
    res.json({
        success:true,
        message:"File Shared Successfully"
    });
}

const download=(req,res)=>{
    res.json({
        success:true,
        message:"File Downloded Successfully"
    });
}

const fileController={
    upload,
    share,
   download
};

export default fileController;