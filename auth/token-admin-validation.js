const { verify }  = require("jsonwebtoken");

module.exports = {
    checkToken: (req,res,next) => {
        const token = req.get("authorization");
        if(token){
            
            verify(token,"pawan",(err,decoded)=>{
                if(err){
                    res.json({
                        success:0,
                        message:"Invalid token"
                    });
                }else{
                    req.body.admin_id=decoded.result.admin_id
                    req.body.role = 'admin'
                    next();
                }
            });
        }else{
            
            res.json({
                success:0,
                message:"Access Denied! unauthorized user",
            });
        }
    }
}