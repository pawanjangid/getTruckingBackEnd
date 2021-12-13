const { create,adminList,updateAdmin,removeAdmin,changeAdminPassword } = require("../Services/admin-role-service");

module.exports = {

    adminAdd: (req,res) => {
        const body = req.body;
        create(body,(err,results) => {
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

    updateAdmin: (req,res) => {
        const body = req.body;
        updateAdmin(body,(err,results) => {
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

    changeAdminPassword : (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        changeAdminPassword(body,(err,results) => {
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

    adminList : (req,res) => {
        
        adminList((err,results) => {
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

    removeAdmin : (req,res) => {
        const body = req.body;
        removeAdmin(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"user Removed"
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully",
                data:results
            })
        });
    },

    PayoutList : (req,res) => {
        payoutList((err,results) => {
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

}