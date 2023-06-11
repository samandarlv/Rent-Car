const { Router } = require("express");
const router = Router();

const clientRouter = require("./client.routes");
router.use("/api/client", clientRouter);

const priceRouter = require("./price_type.routes");
router.use("/api/price", priceRouter);

const carRouter = require("./car.routes");
router.use("/api/car", carRouter);

const rentRouter = require("./rent.routes");
router.use("/api/rent", rentRouter);

module.exports = router;
