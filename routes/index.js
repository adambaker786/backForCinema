const { Router } = require("express");
const importFilms = require("./fims.route");
const importGenre = require("./genre.route");
const importPlace = require("./place.route");
const importSeans = require("./seans.route");
const importUser = require("./users.route");
const importHall = require("./hall.route");

const router = Router();

router.use(importFilms);
router.use(importGenre);
router.use(importHall);
router.use(importPlace);
router.use(importSeans);
router.use(importUser);

module.exports = router;
