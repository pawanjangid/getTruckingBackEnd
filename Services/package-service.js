const pool = require("../config/database");

module.exports = {
    create : (data,callBack) => {
        pool.query("INSERT INTO package(class_id,title,image,description,amount,del_amount,time) VALUES(?,?,?,?,?,?,?)",
        [
            data.class_id,
            data.title,
            data.image,
            data.description,
            data.amount,
            data.del_amount,
            Math.floor(Date.now() /1000)
        ],(err,results,fields)=>{
            if(err){
                callBack(err);
            }
            callBack(null,results);
        })
    },
    packageList : (data,callBack) => {

        function getPackage(class_id) {
            return new Promise((resolve, reject) => {
              pool.query(
                "SELECT * FROM package WHERE class_id = ?",
                [class_id],
                (err, result) => {
                  return err ? reject(err) : resolve(result);
                }
              );
            });
          }

        pool.query("SELECT * FROM class",
        [],
        async (err,results,fields)=>{
            if(err){
                callBack(err);
            }else{
                
                for (let i = 0; i < results.length; i++) {
                    const package = await getPackage(results[i].class_id);
                    results[i]['package'] = package;
                    
                }
                callBack(null,results);
            }
        })
    }
}