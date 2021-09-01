const { create, deleteBanner,listBanner } = require("../Services/adsManage-service");
module.exports = {
    addBanner : (req, res) => {
        const body = req.body;
        create(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to add vehicle",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully added to queue",
                data:result
            });
            
        });
    },
    deleteBanner : (req, res)=>{
        const body = req.body;
        deleteBanner(body,(err,result)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"unable delete",
                });
            }
            return res.status(200).json({
                success:1,
                message:"removed successfully",
                data:result
            });
            
        });
    },
    listBanner:(req, res)=>{
        const body = req.body;
        listBanner(body,(err,results)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"List unable to fetch",
                });
            }
            return res.status(200).json({
                success:1,
                message:"list fetched successfully",
                data:results
            });
        })
    }

}