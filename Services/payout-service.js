const pool = require("../config/database");

module.exports = {

    payoutList: (callBack) => {
        pool.query("SELECT * FROM Payout JOIN drivers ON `Payout`.driver_id=`drivers`.driver_id",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },

}