const { Router } = require("express");
const importFilms = require("./fims.route");
const importSeans = require("./seans.route");
const importUser = require("./users.route");
const importHall = require("./halls.route");

const router = Router();

router.use(importFilms);
router.use(importHall);
router.use(importSeans);
router.use(importUser);

module.exports = router;
