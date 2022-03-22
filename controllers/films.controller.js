const Film = require("../models/Film.model")

module.exports.filmsControllers = {
    postFilm: async (req,res)=>{
        const {name,director, rating,smallText,genre, img,hall}
        try{
            const film = await Film.create({
                name,
                img,
                hall,
                discription: 
                {director,smallText,rating,genre},

            })
            res.json(film)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getAllFilms: async (req,res)=>{
        try{
            const film = await Film.find()
            res.json(film)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getFilmsByCateg: async (req,res)=>{
        try{
            const film = await Film.find({discription:{genre:req.params.id}})
            res.json(film)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getFilmById: async (req,res)=>{
        try{
            const film = await Film.findById(req.params.id)
        }
    }
}