const { getUserByEmail,headers } = require("../Services/admin-service");
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    login: (req,res)=>{
        const body = req.body;
        getUserByEmail(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"admin not found"
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
                    expiresIn:"1h"
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
    headers:(req, res)=>{
        const body = req.body;
        headers(body,(err,results)=>{
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
                data:results[0]
            });
        })
    }

}