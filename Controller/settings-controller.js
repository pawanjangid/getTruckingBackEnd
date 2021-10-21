const { saveData,settingsData } = require("../Services/settings-service");

module.exports = {
    settingsData : (req, res) => {
        settingsData((err,results) => {
                    if(err){
                        console.log(err);
                        return res.status(500).json({
                            success:0,
                            message:"user list not found"
                        });
                    }
                    return res.status(200).json({
                        success:1,
                        message:"successful",
                        data:results
                    })
            });
    },
    saveData : (req, res) => {
        const body = req.body;
        saveData(body,(err,results) => {
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