const pool = require('../config/database');

module.exports = {
    create: (data,callBack)=>{
        pool.query(
            "insert into question(question,subject_id,expert_id,answered,user_id) values(?,?,0,0,?)",
            [data.question,data.subject_id,data.user_id],
            (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },

    updateQuestion: (data,callBack)=>{
        pool.query(
        "update question set question=?,subject_id=? where question_id=?",
        [
            data.question,
            data.subject_id,
            data.question_id
        ],
        (error,results,fields)=>{
            if(error){
                callBack(error);
            }
            return callBack(null,results);
        });
    },
    answerQuestion : (data,callBack)=>{
        pool.query(
            "update question set answer=?, expert_id=? where question_id=?",
            [
               data.answer,
               data.expert_id,
               data.question_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deleteQuestion : (data,callBack)=>{
        pool.query(
            "delete from question where question_id=?",
            [
               data.question_id
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
}