const pool = require("../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            "insert into class(name, description, status) values(?,?,?)",
            [
                data.name,
                data.description,
                'active'
            ],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
            )
    },

    classList: (callBack) => {
        pool.query("SELECT * FROM class ORDER BY class_id DESC",[],
        (error,results,fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        }
        )
    },

}