const { registration,updateDriver,login,driverActive,driverLocation,getOrderByLocation,grabOrder,driverById } = require('../Controller/driver-controller');
const { getCountries } = require('../Controller/Country-controller');
const { listOrder,createOrder,listDriverOrder, completeOrder } = require('../Controller/order-controller');
const {addBank,listBank} = require('../Controller/bank-controller');

const router = require('express').Router();
const { checkToken } = require('../auth/token-driver-validation');
const { topupList } = require('../Controller/topup-controller');
const { fileUpload } = require('../Controller/file-controller');
router.post("/", registration);
router.get("/", checkToken,driverById);
router.get("/countries", getCountries);
router.get("/topups",checkToken,topupList);
router.post("/order",checkToken, createOrder);
router.get("/order",checkToken, listDriverOrder);
router.get("/order",checkToken, completeOrder);
router.patch("/", checkToken, updateDriver);
router.post("/login",login);
router.post('/upload', fileUpload);
router.post('/active',checkToken,driverActive);
router.post('/location',checkToken,driverLocation);
router.post("/getOrder",checkToken,getOrderByLocation);
router.post("/grabOrder",checkToken,grabOrder);
router.post("/bank",checkToken,addBank);
router.get("/bank",checkToken,listBank);

module.exports = router;