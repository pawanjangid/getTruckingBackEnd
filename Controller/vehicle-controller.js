const { create, updateVehicle, deleteVehicle,listVehicle,editFare } = require("../Services/vehicle-service");
module.exports = {
    addVehicle : (req, res) => {
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
                message:"successfully vehicle added to queue",
                data:result
            });
            
        });
    },
    updateVehicle : (req, res) => {
        const body = req.body;
        updateVehicle(body,(err,result)=>{
            if (err){
               return res.status(200),json({
                    success:0,
                    message:"Unable to update vehicle",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully vehicle updated",
                data:result
            });
            
        });
    },
    deleteVehicle : (req, res)=>{
        const body = req.body;
        deleteVehicle(body,(err,result)=>{
            if (err){
                console.log(err);
                return res.status(200),json({
                    success:0,
                    message:"Vehicle unable delete",
                });
            }
            return res.status(200).json({
                success:1,
                message:"vehicle removed successfully",
                data:result
            });
            
        });
    },
    listVehicle:(req, res)=>{
        const body = req.body;
        listVehicle(body,(err,results)=>{
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
    editFare : (req, res) => {
        const body = req.body;
        editFare(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to edit vehicle fare",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully vehicle updated",
                data:result
            });
            
        });
    },
}