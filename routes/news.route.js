const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews);
router.get("/news", newsController.getAllNews);

module.exports = router;
