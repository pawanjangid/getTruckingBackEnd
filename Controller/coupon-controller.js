const { create, deleteCoupon,listCoupon,applyCoupon } = require("../Services/coupon-service");
module.exports = {
    addCoupon : (req, res) => {
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
    deleteCoupon : (req, res)=>{
        const body = req.body;
        deleteCoupon(body,(err,result)=>{
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
    listCoupon:(req, res)=>{
        const body = req.body;
        listCoupon(body,(err,results)=>{
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
    },
    applyCoupon:(req, res)=>{
        const body = req.body;
        applyCoupon(body,(err,results)=>{
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