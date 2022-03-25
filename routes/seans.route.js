const { Router } = require("express");
const { route } = require("express/lib/application");
const { seansController } = require("../controllers/seans.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/seans", seansController.getSeanses);
router.get("/seans/:id", seansController.getOneSeans);
router.post("/seans", seansController.addSeanses);
router.patch(
  "/seans/:id",
  authMiddleware,
  seansController.editSeansToBusyPlace
);

module.exports = router;
