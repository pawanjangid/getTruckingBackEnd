const { packageList } = require("../Services/package-service");

module.exports = {
    getPackage : (req,res)=>{
        const body = req.body;
        packageList(body,(err,package)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:package
            })
        })
    }
}