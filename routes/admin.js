const { getUser } = require('../Controller/user-controller');
const { getDriver } = require('../Controller/driver-controller');
const { addBatch, getBatch} = require('../Controller/batch-controller');
const router = require('express').Router();
//const { checkToken } = require('../auth/token-admin-validation');

router.get("/users", getUser);
router.get("/drivers", getDriver);
router.get("/batch/:class_id", getBatch);
router.post("/batch",addBatch);
module.exports = router;