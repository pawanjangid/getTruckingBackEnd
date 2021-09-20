const { create, bankList } = require("../Services/bank-service");
module.exports = {
    addBank: (req,res) => {
        const body = req.body;
        create(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        });
    },
    listBank: (req,res) => {
        const body = req.body;
        bankList(body,(err,results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        });
    },

}