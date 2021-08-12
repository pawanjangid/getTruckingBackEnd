const { create, updateQuestion,answerQuestion, deleteQuestion } = require("../Services/question-service");
module.exports = {
    addQuestion : (req, res) => {
        const body = req.body;
        create(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to create question",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully question added to queue",
                data:result
            });
            
        });
    },
    updateQuestion : (req, res) => {
        const body = req.body;
        updateQuestion(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to update question",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully question updated",
                data:result
            });
            
        });
    },
    answerQuestion : (req, res) => {
        const body = req.body;
        answerQuestion(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"Unable to answer this question",
                });
            }
            return res.status(200).json({
                success:1,
                message:"successfully answered this question",
                data:result
            });
            
        });
    },
    deleteQuestion : (req, res)=>{
        const body = req.body;
        deleteQuestion(body,(err,result)=>{
            if (err){
                console.log(err);
               return res.status(200),json({
                    success:0,
                    message:"question unable delete",
                });
            }
            return res.status(200).json({
                success:1,
                message:"question deleted successfully",
                data:result
            });
            
        });
    }

}