const { registration, userById,updateUser,login } = require('../Controller/user-controller');
const { listService } = require('../Controller/additionalService-controller');
const { getCountries } = require('../Controller/Country-controller')

const router = require('express').Router();
const { checkToken } = require('../auth/token-validation');

router.post("/", registration)
router.get("/countries", getCountries)
router.post("/services",checkToken, listService)
router.patch("/", checkToken, updateUser)
router.post("/login",login);


module.exports = router;