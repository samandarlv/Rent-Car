const { Router } = require("express");
const router = Router();
const priceController = require("../controllers/price_type.controller");

router.get("/", priceController.getAll);
router.post("/", priceController.addPrice);
router.put("/:id", priceController.updatePrice);
router.delete("/:id", priceController.deletePrice);

module.exports = router;
