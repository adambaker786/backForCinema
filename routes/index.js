const { Router } = require("express");
const importFilms = require("./fims.route");
const importSeans = require("./seans.route");
const importUser = require("./users.route");
const importHall = require("./halls.route");
const importBusy = require("./busy.route");
const importNews = require("./news.route");

const router = Router();

router.use(importFilms);
router.use(importBusy);
router.use(importHall);
router.use(importSeans);
router.use(importUser);
router.use(importNews);

module.exports = router;
