require('dotenv').config()

const pool = require('../config/database');

module.exports = {
    create: (data,callBack)=>{
        pool.query(
            "insert into coupons(coupon,bonus_amount,time) values(?,?,?)",
            [
                data.coupon,
                data.bonus_amount,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    deleteCoupon : (data,callBack)=>{
        pool.query(
            "delete from coupons where coupon_id=?",
            [
               data.coupon_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    listCoupon:(data,callBack)=>{
        pool.query("SELECT * FROM coupons",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    },
    applyCoupon:(data,callBack)=>{
        pool.query("SELECT * FROM coupons where coupon = ?",
        [data.coupon],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            if(results.length > 0){
                return callBack(null,results[0]);
            }else{
                return callBack(true);
            }
            
        })
    }
}