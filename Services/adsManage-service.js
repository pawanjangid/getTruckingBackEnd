require('dotenv').config()

const pool = require('../config/database');
var base64ToImage = require('base64-to-image');

module.exports = {
    create: (data,callBack)=>{

        var base64Str = data.image;
        var path ='./public/banner/';
        const imageName = Date.now() + '.png';
        var optionalObj = {'fileName': imageName, 'type':'png'};
        var imageInfo = base64ToImage(base64Str,path,optionalObj); 
        data.image =  '/banner/' + imageInfo.fileName;


        pool.query(
            "insert into banner(image,time) values(?,?)",
            [
                data.image,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    deleteBanner : (data,callBack)=>{
        pool.query(
            "delete from banner where banner_id=?",
            [
               data.banner_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    listBanner:(data,callBack)=>{
        pool.query("SELECT * FROM banner",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
}