const { addQuestion } = require('../Controller/question-controller');
const router = require('express').Router();

router.post("/",addQuestion)

module.exports = router;