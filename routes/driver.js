const { registration, driverById,updateDriver,login } = require('../Controller/driver-controller');
const { listService } = require('../Controller/additionalService-controller');
const { getCountries } = require('../Controller/Country-controller');
const { listOrder,createOrder } = require('../Controller/order-controller');
const router = require('express').Router();
const { checkToken } = require('../auth/token-validation');
const { topupList } = require('../Controller/topup-controller');

router.post("/", registration)
router.get("/countries", getCountries)
router.get("/topups",checkToken,topupList),
router.post("/order",checkToken, createOrder)
router.get("/order",checkToken, listOrder)
router.patch("/", checkToken, updateDriver)
router.post("/login",login);


module.exports = router;