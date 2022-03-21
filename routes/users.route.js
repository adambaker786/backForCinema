const {Router} = require("express")
const { userController } = require("../controllers/users.controller")

const router = Router()

router.post("/user/sign", userController.registerUser)
router.post("/user/login", userController.loginUser)

module.exports = router