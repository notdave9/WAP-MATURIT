var express = require("express");
var router = express.Router();

const controller = require("../Controllers/pawels");

router.get("/", controller.getAllPawels);

router.get("/:id", controller.getPawelById);

router.delete("/:id", controller.deletePawel);

router.put("/:id", controller.updatePawel);

router.post("/", controller.createPawel);

module.exports = router;
