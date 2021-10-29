const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into driver(fullName, email, phone, password,createdAt,Identification,emergency_contact_person,emergency_contact_number,driving_license_expiry,vehicle_type,vehicle_modal,License_plate_number,ID_card_front,ID_card_back,photo,Proof_of_Residency,Driving_license,Vehicle_License,vehicle_body,insurance,document_status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
                data.fullName,
                data.email,
                data.phone,
                data.password,
                Math.floor(Date.now() /1000),
                data.Identification,
                data.emergency_contact_person,
                data.emergency_contact_number,
                data.driving_license_expiry,
                data.vehicle_type,
                data.vehicle_modal,
                data.License_plate_number,
                data.ID_card_front,
                data.ID_card_back,
                data.photo,
                data.Proof_of_Residency,
                data.Driving_license,
                data.Vehicle_License,
                data.vehicle_body,
                data.insurance,
                0
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },

    updateDriver: (data, callBack) => {
        console.log(data);
        pool.query(
            "UPDATE driver set fullName=?, email=?, phone=?,createdAt=?,Identification=?,emergency_contact_person=?,emergency_contact_number=?,driving_license_expiry=?,vehicle_type=?,vehicle_modal=?,License_plate_number=?,ID_card_front=?,ID_card_back=?,photo=?,Proof_of_Residency=?,Driving_license=?,Vehicle_License=?,vehicle_body=?,insurance=? where driver_id = ?",
            [
                data.fullName,
                data.email,
                data.phone,
                Math.floor(Date.now() /1000),
                data.Identification,
                data.emergency_contact_person,
                data.emergency_contact_number,
                data.driving_license_expiry,
                data.vehicle_type,
                data.vehicle_modal,
                data.License_plate_number,
                data.ID_card_front,
                data.ID_card_back,
                data.photo,
                data.Proof_of_Residency,
                data.Driving_license,
                data.Vehicle_License,
                data.vehicle_body,
                data.insurance,
                data.driver_id
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },

    driverList: (callBack) => {
        pool.query("SELECT * FROM driver",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    driverById: (data,callBack) => {
        console.log(data);
        pool.query("SELECT * FROM driver where driver_id = ?",[data.driver_id],
            (error,results,fields)=>{
                console.log(results)
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },

    driverStatus:(data,callBack) => {
        console.log(data);
        pool.query("UPDATE driver set document_status=1 where driver_id = ?",[data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    driveractiveStatus:(data,callBack) => {
        console.log(data);
        pool.query("UPDATE driver set active=? where driver_id = ?",
        [
            data.active,
            data.driver_id
        ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    removeDriver: (data,callBack) => {
        
        pool.query("DELETE FROM driver where driver_id = ?",[data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },


    driverActive : (data,callBack) => {
        pool.query("UPDATE driver SET active = ? WHERE driver_id = ?", [data.active,data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    driverLocation : (data,callBack) => {
        console.log(data);
        pool.query("UPDATE driver SET latitude = ?,longitude = ? WHERE driver_id = ?",
        [data.latitude,data.longitude,data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getDriverByEmail: (data,callBack)=>{
        pool.query("SELECT * from driver where phone = ?",
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
    },
    getOrderByLocation:(data,callBack) => {
        pool.query("SELECT *, ( 3959 * acos(cos(radians(?)) * cos(radians(`pickLatitude`)) * cos(radians(`pickLongitude`) - radians(?)) + sin(radians(?)) * sin(radians(`pickLatitude`))) ) AS distanceBetween FROM orders WHERE `status`='on_going' ORDER BY distanceBetween LIMIT 0, 20",
        [
            data.latitude,
            data.longitude,
            data.latitude
        ]
        ,(error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    },
    grabOrder : (data,callBack) => {
        console.log(data);
        pool.query("UPDATE orders SET driver_id = ?,status = 'assigned' WHERE order_id = ?",
        [data.driver_id,data.order_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    driverRides:(data,callBack) => {
        pool.query("SELECT * FROm orders where driver_id = ?",
        [data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },


    favoriteDriver : (data,callBack) => {
        console.log(data);
        pool.query("SELECT * FROM driver where phone=?",
        [
            data.phone
        ],(error,results,fields)=>{
            if(error){
                callBack(error);
            }
            if(results.length > 0){
                pool.query("SELECT * FROM favorite_driver where driver_id=? AND user_id=?",
                [
                    results[0].driver_id,
                    data.user_id
                ],
                (error,datalist,fields)=>{
                    if(error){
                        return callBack(error);
                    }
                    if(datalist.length > 0){
                        return callBack(true);
                    }else{
                        pool.query("INSERT INTO favorite_driver(driver_id,user_id,addedTime) values(?,?,?)",
                        [
                            results[0].driver_id,
                            data.user_id,
                            Math.floor(Date.now() /1000)
                        ],
                        (error,inserted,fields)=>{
                            if(error){
                                return callBack(error);
                            }
                            return callBack(null,inserted)
                        })
                    }
                })
            }else{
                return callBack(true);
            }
        })
    },
    favoriteDriverList: (data,callBack)=>{
        pool.query("SELECT * FROM favorite_driver INNER JOIN driver ON favorite_driver.driver_id=driver.driver_id where user_id=?",
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
};