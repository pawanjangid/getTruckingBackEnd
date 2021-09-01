const { getUser } = require('../Controller/user-controller');
const { getDriver } = require('../Controller/driver-controller');
const { addBatch, getBatch} = require('../Controller/batch-controller');
const { listVehicle,addVehicle }  = require('../Controller/vehicle-controller');
const { listBanner, addBanner } = require('../Controller/adsManage-controller');
const { listCoupon, addCoupon } = require('../Controller/coupon-controller');
const { headers } = require('../Controller/admin-controller')
const router = require('express').Router();
//const { checkToken } = require('../auth/token-admin-validation');

router.get("/users", getUser);
router.get("/drivers", getDriver);
router.get("/batch/:class_id", getBatch);
router.post("/batch",addBatch);
router.get("/vehicles",listVehicle);
router.post("/vehicles",addVehicle);
router.get("/banner",listBanner);
router.post("/banner",addBanner);
router.get("/coupon",listCoupon);
router.post("/coupon",addCoupon);
router.get("/headers",headers);


module.exports = router;