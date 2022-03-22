const { Router } = require("express");
const { route } = require("express/lib/application");
const { seansController } = require("../controllers/seans.controller");

const router = Router();

router.get("/seans", seansController.getSeanses);
router.post("/seans", seansController.addSeanses);

module.exports = router;
