const { addVehicle,updateVehicle,deleteVehicle,listVehicle } = require('../Controller/vehicle-controller');
const router = require('express').Router();

router.post("/",addVehicle)
router.get("/",listVehicle)
module.exports = router;