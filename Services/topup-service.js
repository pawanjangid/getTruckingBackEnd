const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into topups(amount, offers, time) values(?,?,?)",
            [
                data.amount,
                data.offers,
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

    topupList: (callBack) => {
        pool.query("SELECT * FROM topups",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },

}