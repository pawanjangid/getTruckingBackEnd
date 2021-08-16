require('dotenv').config()

const pool = require('../config/database');

module.exports = {
    create: (data,callBack)=>{
        pool.query(
            "insert into additional_services(vehicle_id,title,amount,time) values(?,?,?,?)",
            [
                data.vehicle_id,
                data.title,
                data.amount,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    updateService: (data,callBack)=>{
        pool.query(
        "update additional_services set title=?, amount=? where aservice_id=?",
        [
            data.title,
            data.amount,
            data.aservice_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },
    deleteService : (data,callBack)=>{
        pool.query(
            "delete from additional_services where aservice_id=?",
            [
               data.aservice_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    listService:(data,callBack)=>{
        pool.query("SELECT * FROM additional_services where vehicle_id=?",
        [
            data.vehicle_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
}