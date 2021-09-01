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
    },
    headers: (data,callBack)=>{
        pool.query("SELECT count(*) as drivers,(SELECT count(*) from users) as users,(SELECT 200) as total_earning,(SELECT count(*) from orders) as total_trips from driver",[],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
    
}