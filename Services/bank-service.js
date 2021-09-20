const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into bankDetail(driver_id, accountNumber, bankCode, Benifecary, BankName, addedAt) values(?,?,?,?,?,?)",
            [
                data.driver_id,
                data.accountNumber,
                data.bankCode,
                data.Benifecary,
                data.BankName,
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

    bankList: (callBack) => {
        pool.query("SELECT * FROM bankDetail where driver_id=?",[
            data.driver_id
        ],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    }
};