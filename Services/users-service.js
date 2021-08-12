const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into student(firstName, lastName, email, phone, password,time) values(?,?,?,?,?,?)",
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

    userList: (callBack) => {
        pool.query("SELECT * FROM student",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    userById: (data,callBack) => {
        console.log(data)
        pool.query("SELECT * FROM student where std_id = ?",[data.user_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateUser : (data,callBack) => {
        pool.query("UPDATE student SET firstName = ?, lastName=? WHERE std_id = ?", [data.firstName,data.lastName,data.user_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getUserByEmail: (data,callBack)=>{
        pool.query("SELECT * from student where email = ?",
        [
            data.username
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