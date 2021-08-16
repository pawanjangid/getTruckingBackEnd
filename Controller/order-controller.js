const { create,listOrder } = require("../Services/order-service");

module.exports = {
    createOrder : (req,res)=>{
        const body = req.body;
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    listOrder:(req, res)=>{
        const body = req.body;
        listOrder(body,(err,results)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"Unable to fetch service results",
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