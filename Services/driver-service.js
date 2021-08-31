const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into driver(firstName, lastName, email, phone, password,createdAt) values(?,?,?,?,?,?)",
            [
                data.firstName,
                data.lastName,
                data.email,
                data.phone,
                data.password,
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

    driverList: (callBack) => {
        pool.query("SELECT * FROM driver",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    driverById: (data,callBack) => {
        console.log(data)
        pool.query("SELECT * FROM driver where driver_id = ?",[data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateDriver : (data,callBack) => {
        pool.query("UPDATE driver SET firstName = ?, lastName=? WHERE driver_id = ?", [data.firstName,data.lastName,data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getDriverByEmail: (data,callBack)=>{
        pool.query("SELECT * from driver where phone = ?",
        [
            data.phone
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        )
    }
};