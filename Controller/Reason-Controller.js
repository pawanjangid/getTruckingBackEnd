const { AddReason,listReason,editreason,removeReason  } = require("../Services/Reason-service");
module.exports = {
    AddReason : (req, res) => {
        const body = req.body;
        AddReason(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to add vehicle",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully vehicle added to queue",
                data:result
            });
            
        });
    },
    editreason : (req, res) => {
        const body = req.body;
        editreason(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to update",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully reason updated",
                data:result
            });
            
        });
    },
    removeReason : (req, res)=>{
        const body = req.body;
        removeReason(body,(err,result)=>{
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
    listReason:(req, res)=>{
        const body = req.body;
        listReason(body,(err,results)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"Vehicle unable delete",
                });
            }
            return res.status(200).json({
                success:1,
                message:"list fetched successfully",
                data:results
            });
        })
    },
}