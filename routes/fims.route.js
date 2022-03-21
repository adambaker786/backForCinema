const {Router}= require("express")
const { filmsControllers } = require("../controllers/films.controller")

const router = Router()

router.post("/film", filmsControllers.postFilm)
router.get("/films", filmsControllers.getAllFilms)
router.get("/film/:id", filmsControllers.getFilmById)
router.get("/film/category/:id", filmsControllers.getFilmsByCateg)

module.exports = router