require('dotenv').config()

const pool = require('../config/database');
module.exports = {
    create: (data,callBack)=>{
        pool.query(
            "insert into orders(vehicle_id,preferred_driver,user_id,amount,locations,asap,pickLatitude,pickLongitude,duration,distance,time) values(?,?,?,?,?,?,?,?,?,?,?)",
            [
                data.vehicle_id,
                data.preferred_driver,
                data.user_id,
                data.amount,
                data.locations,
                data.asap,
                data.pickLatitude,
                data.pickLongitude,
                data.duration,
                data.distance,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
                console.log(error);
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
        pool.query("SELECT * FROM `orders` INNER JOIN `users` ON `orders`.user_id=`users`.user_id INNER JOIN `vehicles` ON `orders`.vehicle_id=`vehicles`.vehicle_id where `orders`.user_id = ?",
        [
            data.user_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    },
    listAllOrder:(data,callBack)=>{
        pool.query("SELECT * FROM `orders` INNER JOIN `users` ON `orders`.user_id=`users`.user_id INNER JOIN `vehicles` ON `orders`.vehicle_id=`vehicles`.vehicle_id",
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