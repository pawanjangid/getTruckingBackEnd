require('dotenv').config()

const pool = require('../config/database');
var base64ToImage = require('base64-to-image');

module.exports = {
    create: (data,callBack)=>{

        var base64Str = data.image;
        var path ='./public/vehicle/';
        const imageName = Date.now() + '.png';
        var optionalObj = {'fileName': imageName, 'type':'png'};
        var imageInfo = base64ToImage(base64Str,path,optionalObj); 
        data.image =  '/vehicle/' + imageInfo.fileName;


        pool.query(
            "insert into vehicles(vehicle_name,descrition,dimension,baseprice,parKmcost,image,time) values(?,?,?,?,?,?,?)",
            [
                data.vehicle_name,
                data.descrition,
                data.dimension,
                data.baseprice,
                data.parKmcost,
                data.image,
                Math.floor(Date.now() /1000)],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    updateVehicle: (data,callBack)=>{
        pool.query(
        "update vehicles set vehicle_name=? where vehicle_id=?",
        [
            data.vehicle_name,
            data.vehilce_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },
    deleteVehicle : (data,callBack)=>{
        pool.query(
            "delete from vehicles where vehilce_id=?",
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
    listVehicle:(data,callBack)=>{
        console.log(process.env)
        pool.query("SELECT * FROM vehicles",
        [],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    }
}