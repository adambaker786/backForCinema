const {Router}= require("express")
const { reviewsController } = require("../controllers/reviews.controllers")
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()

router.post('/film/review', authMiddleware, reviewsController.addRev)
router.get("/film/review/:id", reviewsController.getReview )

module.exports = router