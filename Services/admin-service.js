const pool = require("../config/database");

module.exports = {

    getUserByEmail: (data,callBack)=>{
        pool.query("SELECT * from admin where email = ?",
        [
            data.email
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        )
    }
    
}