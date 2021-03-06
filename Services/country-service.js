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
    },
    AllCountries: (data,callBack)=>{
        pool.query("SELECT * from country",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    CountryStatus : (data,callBack)=>{
        pool.query("UPDATE country set status = ? WHERE id = ?",
        [data.status,data.id],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    }

    
}