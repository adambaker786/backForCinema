const {Router} = require("express")
const { hallController } = require("../controllers/halls.controller")

const router = Router()

router.post("/hall", hallController.postHall)
router.get("/hall", hallController.getHalls)
router.get("./hall/:id", hallController.getHallById)

module.exports = router