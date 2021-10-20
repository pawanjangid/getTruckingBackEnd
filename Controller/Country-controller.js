const { getCountries,AllCountries } = require("../Services/country-service");

module.exports = {
    getCountries: (req,res) => {
        const body = req.body;
        getCountries(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        });
    },
    AllCountries: (req,res) => {
        const body = req.body;
        AllCountries(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        });
    }
}