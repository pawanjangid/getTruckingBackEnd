const { registration,updateDriver,login,driverActive,driverLocation,getOrderByLocation,grabOrder } = require('../Controller/driver-controller');
const { getCountries } = require('../Controller/Country-controller');
const { listOrder,createOrder } = require('../Controller/order-controller');
const router = require('express').Router();
const { checkToken } = require('../auth/token-driver-validation');
const { topupList } = require('../Controller/topup-controller');
const { fileUpload } = require('../Controller/file-controller');


router.post("/", registration);
router.get("/countries", getCountries);
router.get("/topups",checkToken,topupList);
router.post("/order",checkToken, createOrder);
router.get("/order",checkToken, listOrder);
router.patch("/", checkToken, updateDriver);
router.post("/login",login);
router.post('/upload', fileUpload);
router.post('/active',checkToken,driverActive);
router.post('/location',checkToken,driverLocation);
router.post("/getOrder",checkToken,getOrderByLocation);
router.post("/grabOrder",checkToken,grabOrder);

module.exports = router;