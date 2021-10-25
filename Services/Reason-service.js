require('dotenv').config()
const pool = require('../config/database');
module.exports = {
    AddReason: (data,callBack)=>{


        pool.query(
            "insert into reasons(reason,createAt) values(?,?)",
            [
                data.reason,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    editreason: (data,callBack)=>{
        pool.query(
        "update reasons set reason=? where reason_id=?",
        [
            data.reason,
            data.reason_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },
    removeReason : (data,callBack)=>{
        pool.query(
            "DELETE from reasons where reason_id=?",
            [
               data.reason_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    listReason:(data,callBack)=>{
        pool.query("SELECT * FROM reasons",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
}