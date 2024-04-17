var express = require("express");
var router = express.Router();

const controller = require("../Controllers/davids");

router.get("/", controller.getAllDavids);

router.get("/:id", controller.getDavidById);

router.delete("/:id", controller.deleteDavid);

router.put("/:id", controller.updateDavid);

router.post("/", controller.createDavid);

module.exports = router;
