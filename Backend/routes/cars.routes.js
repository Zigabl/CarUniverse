const express = require("express");
const router = express.Router();

const controller = require("../controllers/cars.controller");

router.get("/:id", controller.getCarDetail);

module.exports = router;