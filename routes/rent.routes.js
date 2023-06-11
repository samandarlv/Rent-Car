const { Router } = require("express");
const router = Router();
const rentController = require("../controllers/rent.controller");

router.get("/", rentController.getAll);
router.post("/", rentController.addRent);
router.put("/:id", rentController.updateRent);
router.delete("/:id", rentController.deleteRent);

module.exports = router;
