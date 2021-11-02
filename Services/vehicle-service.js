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
            "insert into vehicles(vehicle_name,description,dimension,baseprice,parKmcost,image,time) values(?,?,?,?,?,?,?)",
            [
                data.vehicle_name,
                data.description,
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


        var base64Str = data.image;
        var path ='./public/vehicle/';
        const imageName = Date.now() + '.png';
        var optionalObj = {'fileName': imageName, 'type':'png'};
        var imageInfo = base64ToImage(base64Str,path,optionalObj); 
        data.image =  '/vehicle/' + imageInfo.fileName;


        pool.query(
        "update vehicles set vehicle_name=?,description=?,dimension=?,image=?,time=? where vehicle_id=?",
        [
            data.vehicle_name,
            data.description,
            data.dimension,
            data.image,
            Math.floor(Date.now() /1000),
            data.vehicle_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },
    editFare:(data,callBack)=>{
        pool.query(
        "update vehicles set baseprice=?,parKmcost=? where vehicle_id=?",
        [
            data.baseprice,
            data.parKmcost,
            data.vehicle_id
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
            "DELETE from vehicles where vehicle_id=?",
            [
               data.vehicle_id
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