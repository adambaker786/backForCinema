const { Router } = require("express");
const { busyController } = require("../controllers/busy.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/busy", authMiddleware, busyController.addBusy);
router.get("/busy", busyController.getBusy);
router.get("/user/busy", authMiddleware, busyController.getUserBusy);
router.delete("/user/busy/:id", authMiddleware, busyController.deleteBusy)

module.exports = router;
