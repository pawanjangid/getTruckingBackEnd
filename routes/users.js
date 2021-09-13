const { registration, userById,updateUser,login } = require('../Controller/user-controller');
const { listService } = require('../Controller/additionalService-controller');
const { getCountries } = require('../Controller/Country-controller');
const { listOrder,createOrder } = require('../Controller/order-controller');
const router = require('express').Router();
const { checkToken } = require('../auth/token-validation');
const { topupList } = require('../Controller/topup-controller');
const {favoriteDriver,favoriteDriverList} = require('../Controller/driver-controller');

router.post("/", registration)
router.get("/countries", getCountries)
router.get("/topups",checkToken,topupList),
router.post("/services",checkToken, listService)
router.post("/order",checkToken, createOrder)
router.get("/order",checkToken, listOrder)
router.patch("/", checkToken, updateUser)
router.post("/login",login);
router.post("/favoriteDriver",checkToken,favoriteDriver);
router.get("/favoriteDriver",checkToken,favoriteDriverList);

module.exports = router;