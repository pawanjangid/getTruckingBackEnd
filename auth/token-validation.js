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
                    
                    req.body.user_id=decoded.result.std_id
                    req.body.role = 'user'
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