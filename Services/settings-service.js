const pool = require("../config/database");

module.exports = {
    saveData: (data, callBack) => {
        pool.query(
            "update settings set dayColor=?,nightColor=?,dayBackground=?,nightBackground=?,updateTime=? where setting_id = 1",
            [
                data.dayColor,
                data.nightColor,
                data.dayBackground,
                data.nightBackground,
                Math.floor(Date.now() /1000),
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },

    settingsData: (callBack) => {
        pool.query("SELECT * FROM settings where setting_id = 1",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        )
    },

}