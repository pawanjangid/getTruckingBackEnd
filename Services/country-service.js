const pool = require("../config/database");

module.exports = {
    getCountries: (data,callBack)=>{
        pool.query("SELECT * from country where status='active'",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    }
    
}