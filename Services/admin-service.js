const pool = require("../config/database");

module.exports = {

    getUserByEmail: (data,callBack)=>{
        pool.query("SELECT * from admin where email = ?",
        [
            data.email
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results[0]);
        }
        )
    },
    headers: (data,callBack)=>{
        pool.query("SELECT count(*) as drivers,(SELECT count(*) from users) as users,(SELECT 200) as total_earning,(SELECT count(*) from orders) as total_trips from driver",[],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        })
    },
    create: (data, callBack) => {
        pool.query(
            "insert into admin(name, email, phone, password,role,createdAt) values(?,?,?,?,?,?)",
            [
                data.name,
                data.email,
                data.phone,
                data.password,
                data.role,
                Math.floor(Date.now() /1000)
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },
    adminList: (callBack) => {
        pool.query("SELECT * FROM admin",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    updateAdmin : (data,callBack) => {
        console.log(data);
        pool.query("UPDATE admin SET name = ?, email=?, password=?, phone=? WHERE admin_id = ?", 
        [
            data.name,
            data.email,
            data.password,
            data.phone,
            data.admin_id,
        ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    removeAdmin: (data,callBack) => {
        console.log(data);
        pool.query("DELETE from admin where admin_id=?", 
        [
            data.admin_id
        ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

}