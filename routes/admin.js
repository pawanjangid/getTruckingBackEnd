const { getUser,userById,editAmount } = require('../Controller/user-controller');
const { getDriver,registration,removeDriver,driverById,driverStatus,driveractiveStatus,driverRides,updateDriver } = require('../Controller/driver-controller');
const { listVehicle,addVehicle,deleteVehicle,editFare }  = require('../Controller/vehicle-controller');
const { listBanner, addBanner,deleteBanner } = require('../Controller/adsManage-controller');
const { listCoupon, addCoupon,deleteCoupon } = require('../Controller/coupon-controller');
const { headers,adminAdd,adminList,PayoutList,updateAdmin,removeAdmin,changeAdminPassword } = require('../Controller/admin-controller');
const { AllCountries,CountryStatus } = require('../Controller/Country-controller');
const {listAllOrder } = require('../Controller/order-controller');
const {settingsData,saveData} = require('../Controller/settings-controller');
const {AddReason,listReason,editreason,removeReason} = require('../Controller/Reason-Controller');


const router = require('express').Router();


router.post("/admin",adminAdd);
router.get("/admin",adminList);
router.post("/editAdmin",updateAdmin);
router.post("/removeAdmin",removeAdmin);
router.get("/users", getUser);
router.post("/userById", userById);
router.get("/drivers", getDriver);
router.post("/updateDriver",updateDriver);
router.post("/driverById", driverById);
router.post("/driverStatus",driverStatus)
router.post("/driveractiveStatus",driveractiveStatus);
router.post("/driverRides",driverRides);
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
router.post("/settings",saveData);
router.post("/editFare",editFare);
router.post("/reason",AddReason);
router.get("/reason",listReason);
router.post("/editReason",editreason);
router.post("/removeReason",removeReason);
router.post("/editAmount",editAmount);
router.post("/deleteCoupon",deleteCoupon);
router.post("/changeAdminPassword",changeAdminPassword)

module.exports = router;