const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/user", authMiddleware, userController.getUser);
router.post("/user/sign", userController.registerUser);
router.post("/user/login", userController.loginUser);

module.exports = router;
