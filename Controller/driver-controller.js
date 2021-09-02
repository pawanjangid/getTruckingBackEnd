const { create, driverList, driverById, updateDriver, getDriverByEmail } = require("../Services/driver-service");
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