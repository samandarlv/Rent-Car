const { Router } = require("express");
const router = Router();
const carController = require("../controllers/car.controller");

router.get("/", carController.getAll);
router.post("/", carController.addCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
