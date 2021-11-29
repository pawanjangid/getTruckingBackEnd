const { create, userList, userById, updateUser, getUserByEmail,editAmount } = require("../Services/users-service");
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

    getUser : (req,res) => {
        console.log(req.body.role)
        userList((err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user list not found"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Successful",
                data:results
            })
        });

    },

    editAmount : (req,res) => {
        const body = req.body;
        editAmount(body,(err,results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"User Amount unable to update"
                });
            }
            return res.status(200).json({
                success:1,
                message:"Amount Updated Successfully",
                data:results
            })
        });

    },

    userById: (req,res) => {
        const body = req.body;
        userById(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user list not found"
                });
            }

            return res.status(200).json({
                success:1,
                message:"User data here",
                data:results
            });
            
        });
    },
    updateUser: (req,res)=>{
        const body = req.body;
        console.log(body);
        updateUser(body,(err,result)=>{
            if(err){
                console.log("Error :",err);
                return res.status(500).json({
                    success:0,
                    message:"Sorry!! we are unable to update"
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
        getUserByEmail(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user list not found"
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