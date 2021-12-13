const pool = require("../config/database");

module.exports = {

    create: (data, callBack) => {
        pool.query(
            "insert into admin_role(type, name, createdAt) values(?,?,?)",
            [
                data.type,
                data.name,
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
    adminRoleList: (callBack) => {
        pool.query("SELECT * FROM admin_role",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },
    updateAdminRole : (data,callBack) => {
        
        pool.query("UPDATE admin_role SET type=?,name = ? WHERE role_id = ?", 
        [
            data.type,
            data.name,
            data.role_id,
        ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    removeAdminRole: (data,callBack) => {
        console.log(data);
        pool.query("DELETE from admin_role where role_id=?", 
        [
            data.role_id
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