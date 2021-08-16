const { create, updateService, deleteService,listService } = require("../Services/additionalService-service");
module.exports = {
    addService : (req, res) => {
        const body = req.body;
        create(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to add Service",
                });
            }
            return res.status(200).json({
                success:1,
                message:"Service added successfully",
                data:result
            });
        });
    },
    updateService : (req, res) => {
        const body = req.body;
        updateService(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to update Service",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully Service updated",
                data:result
            });
            
        });
    },
    deleteService : (req, res)=>{
        const body = req.body;
        deleteService(body,(err,result)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"Service unable delete",
                });
            }
            return res.status(200).json({
                success:1,
                message:"Service removed successfully",
                data:result
            });
            
        });
    },
    listService:(req, res)=>{
        const body = req.body;
        listService(body,(err,results)=>{
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