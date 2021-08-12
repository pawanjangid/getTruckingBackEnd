const { getUser } = require('../Controller/user-controller');
const { getClass,  classAdd } = require('../Controller/class-controller');
const { addBatch, getBatch} = require('../Controller/batch-controller');
const { getPackage} = require('../Controller/package-controller');
const router = require('express').Router();
//const { checkToken } = require('../auth/token-admin-validation');

router.get("/users", getUser);
router.get("/class",getClass);
router.post("/class", classAdd);
router.get("/batch/:class_id", getBatch);
router.post("/batch",addBatch);
router.get("/package",getPackage);

module.exports = router;