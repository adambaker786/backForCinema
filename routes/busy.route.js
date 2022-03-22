const { Router } = require("express");
const { busyController } = require("../controllers/busy.controller");

const router = Router();

router.post("/film", busyController.addBusy);
router.get("/films", busyController.getBusy);

module.exports = router;
