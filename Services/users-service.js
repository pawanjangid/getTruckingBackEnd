const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into users(firstName, lastName, email, phone, password,createdAt) values(?,?,?,?,?,?)",
            [
                'name',
                'name',
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

    userList: (callBack) => {
        pool.query("SELECT * FROM users",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    userById: (data,callBack) => {
        pool.query("SELECT * FROM users where user_id = ?",[data.user_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateUser : (data,callBack) => {
        pool.query("UPDATE users SET firstName = ?, lastName=?,email=?,phone=? WHERE user_id = ?", [data.firstName,data.lastName,data.email,data.phone,data.user_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    editAmount: (data,callBack) => {
        pool.query("UPDATE users SET wallet_balance = ? WHERE user_id = ?", [data.amount,data.user_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },


    getUserByEmail: (data,callBack)=>{
        pool.query("SELECT * from users where phone = ?",
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