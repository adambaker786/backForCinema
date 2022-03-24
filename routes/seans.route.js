const { Router } = require("express");
const { route } = require("express/lib/application");
const { seansController } = require("../controllers/seans.controller");

const router = Router();

router.get("/seans", seansController.getSeanses);
router.get("/seans/:id", seansController.getOneSeans);
router.post("/seans", seansController.addSeanses);
router.patch('/seans/:id', seansController.editSeans)

module.exports = router;
