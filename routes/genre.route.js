const { Router } = require("express");
const { genreController } = require("../controllers/genre.controller");

const router = Router();

router.get("/genres", genreController.getGenres);
router.post("/genre", genreController.addGenre);
