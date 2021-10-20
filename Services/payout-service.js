const pool = require("../config/database");

module.exports = {

    payoutList: (callBack) => {
        pool.query("SELECT * FROM Payout JOIN driver ON `Payout`.driver_id=`driver`.driver_id",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },

}