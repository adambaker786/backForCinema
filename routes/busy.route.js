const { Router } = require("express");
const { busyController } = require("../controllers/busy.controller");

const router = Router();

router.post("/busy", busyController.addBusy);
router.get("/busy", busyController.getBusy);

module.exports = router;
