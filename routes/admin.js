const { getUser } = require('../Controller/user-controller');
const { getDriver,registration,removeDriver } = require('../Controller/driver-controller');
const { addBatch, getBatch} = require('../Controller/batch-controller');
const { listVehicle,addVehicle,deleteVehicle }  = require('../Controller/vehicle-controller');
const { listBanner, addBanner,deleteBanner } = require('../Controller/adsManage-controller');
const { listCoupon, addCoupon } = require('../Controller/coupon-controller');
const { headers,adminAdd,adminList,PayoutList,updateAdmin,removeAdmin } = require('../Controller/admin-controller');
const { AllCountries,CountryStatus } = require('../Controller/Country-controller');
const {listAllOrder } = require('../Controller/order-controller');
const {settingsData,saveData} = require('../Controller/settings-controller');
const router = require('express').Router();


router.post("/admin",adminAdd);
router.get("/admin",adminList);
router.post("/editAdmin",updateAdmin);
router.post("/removeAdmin",removeAdmin);
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
router.get("/country",AllCountries);
router.get("/orders",listAllOrder);
router.get("/PayoutList",PayoutList);
router.post("/driver",registration)
router.post("/removeDriver",removeDriver)
router.post("/removeVehicle",deleteVehicle);
router.post("/countryStatus",CountryStatus);
router.post("/deleteBanner",deleteBanner);
router.get("/settings",settingsData);
router.post("/settings",saveData)
module.exports = router;