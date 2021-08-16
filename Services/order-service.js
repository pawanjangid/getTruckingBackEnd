require('dotenv').config()

const pool = require('../config/database');
module.exports = {
    create: (data,callBack)=>{

        pool.query(
            "insert into orders(vehicle_id,preferred_driver,user_id,amount,locations,asap,time) values(?,?,?,?,?,?)",
            [
                data.vehicle_id,
                data.preferred_driver,
                data.user_id,
                data.amount,
                JSON.stringify(data.locations),
                data.asap,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    deleteOrder : (data,callBack)=>{
        pool.query(
            "delete from orders where order_id=?",
            [
               data.question_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    listOrder:(data,callBack)=>{
        console.log(process.env)
        pool.query("SELECT * FROM orders where user_id = ?",
        [
            data.user_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
}