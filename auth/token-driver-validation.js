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
                    
                    req.body.driver_id=decoded.result.driver_id
                    req.body.role = 'driver'
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