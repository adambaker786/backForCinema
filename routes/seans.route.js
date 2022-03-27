const { Router } = require("express");
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
router.patch("/seans/place/:id", authMiddleware, seansController.deletePlaceBySeans)

module.exports = router;
