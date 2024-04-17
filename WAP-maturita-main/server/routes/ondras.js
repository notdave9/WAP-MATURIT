var express = require("express");
var router = express.Router();

const controller = require("../Controllers/ondras");

router.get("/", controller.getAllOndras);

router.get("/:id", controller.getOndraById);

router.delete("/:id", controller.deleteOndra);

router.put("/:id", controller.updateOndra);

router.post("/", controller.createOndra);

module.exports = router;
