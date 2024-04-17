var express = require("express");
var router = express.Router();

const controller = require("../Controllers/schejbals");

router.get("/", controller.getAllSchejbals);

router.get("/:id", controller.getSchejbalById);

router.delete("/:id", controller.deleteSchejbal);

router.put("/:id", controller.updateSchejbal);

router.post("/", controller.createSchejbal);

module.exports = router;
