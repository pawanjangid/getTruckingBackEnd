const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into driver(fullName, email, phone, password,createdAt,Identification,emergency_contact_person,emergency_contact_number,driving_license_expiry,vehicle_type,vehicle_modal,License_plate_number,ID_card_front,ID_card_back,photo,Proof_of_Residency,Driving_license,Vehicle_License,vehicle_body,insurance,document_status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
                data.firstName,
                data.lastName,
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
                data.document_status
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
        console.log(data)
        pool.query("SELECT * FROM driver where driver_id = ?",[data.driver_id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateDriver : (data,callBack) => {
        pool.query("UPDATE driver SET firstName = ?, lastName=? WHERE driver_id = ?", [data.firstName,data.lastName,data.driver_id],
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
    }
};