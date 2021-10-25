const { create, driverList, driverById,driverRides,removeDriver, driverStatus,updateDriver, driverActive,driveractiveStatus, getDriverByEmail,driverLocation,getOrderByLocation,grabOrder,favoriteDriver,favoriteDriverList } = require("../Services/driver-service");
const { genSaltSync,hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
    registration: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
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

    getDriver : (req,res) => {
        console.log(req.body.role)
        driverList((err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"successful",
                data:results
            })
        });

    },

    driverById: (req,res) => {
        const body = req.body;
        driverById(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Driver data here",
                data:results
            });
        });
    },
    driverStatus: (req,res) => {
        const body = req.body;
        driverStatus(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Driver Document status updated",
                data:results
            });
        });
    },
    driveractiveStatus: (req,res) => {
        const body = req.body;
        driveractiveStatus(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Driver Document status updated",
                data:results
            });
        });
    },
    driverActive: (req,res)=>{
        const body = req.body;
        driverActive(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"unable to set status online"
                });
            }
            return res.status(200).json({
                success:1,
                message:"you are online now",
                data:result
            });
        });

    },
    driverLocation: (req,res)=>{
        const body = req.body;
        driverLocation(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"unable to set status online"
                });
            }
            return res.status(200).json({
                success:1,
                message:"you are online now",
                data:result
            });
        });
    },
    removeDriver: (req,res)=>{
        const body = req.body;
        removeDriver(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Unable to remove driver"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Driver Removed",
                data:result
            });
        });
    },
    getOrderByLocation: (req,res)=>{
        const body = req.body;
        getOrderByLocation(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"User data updated",
                data:result
            });
        });

    },
    updateDriver: (req,res)=>{
        const body = req.body;
        updateDriver(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"User data updated",
                data:result
            });
        });

    },
    grabOrder: (req,res)=>{
        const body = req.body;
        grabOrder(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Unable to Grab Order Try again"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Order successfully grabbed",
                data:result
            });
        });

    },
    driverRides: (req,res)=>{
        const body = req.body;
        driverRides(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Unable to Grab Order Try again"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Order successfully",
                data:results
            });
        });

    },
    favoriteDriver: (req,res)=>{
        const body = req.body;
        favoriteDriver(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver is not register or may already in list"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Driver Added successfully",
                data:result
            });
        });

    },
    favoriteDriverList: (req,res)=>{
        const body = req.body;
        favoriteDriverList(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Haven't any driver"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Drivers here",
                data:result
            });
        });

    },
    login: (req,res)=>{
        const body = req.body;
        getDriverByEmail(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Driver list not found"
                });
            }
            if(!results){
                return res.status(500).json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
            const result = compareSync(body.password,results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({result:results},'pawan',{
                    expiresIn:"30 days"
                });
                return res.status(200).json({
                    success:1,
                    message:"login successfully",
                    token: jsontoken
                })
            }else{
                return res.status(500).json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
        });
    },
}