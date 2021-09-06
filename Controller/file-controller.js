const { create } = require("../Services/file-service");
module.exports = {
    fileUpload : (req, res) => {
        const body = req.body;
        create(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"unable to create file",
                });
            }
            return res.status(200).json({
                success:1,
                message:"file uploaded successfully",
                data:result
            });
            
        });
    }
}