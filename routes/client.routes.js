const { Router } = require("express");
const router = Router();
const clientController = require("../controllers/client.controller");

router.get("/", clientController.getAll);
router.post("/", clientController.addClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

module.exports = router;
