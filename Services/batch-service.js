const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into batch(title, short_description, long_description, amount,class_id,time) values(?,?,?,?,?,?)",
            [
                data.title,
                data.short_description,
                data.long_description,
                data.amount,
                data.class_id,
                Math.floor(Date.now() /1000)
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },
    getBatch: (data,callBack)=>{
        pool.query("SELECT * from batch where class_id = ?",
        [
            data.class_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    }
    
}