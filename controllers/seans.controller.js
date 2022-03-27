const Seans = require("../models/Seans.model");

module.exports.seansController = {
  addSeanses: async (req, res) => {
    try {
      const { time, film, hall } = req.body;
      const seans = await Seans.create({
        time,
        film,
        hall,
      });
      res.json(seans);
    } catch (error) {
      res.json(error);
    }
  },
  
    deletePlaceBySeans: async (req,res)=>{
      const {places} = req.body
      try{
        await Seans.findByIdAndUpdate(req.params.id,{
          $pull:{
            place: places
          }
        })
        res.json("Возврат оформлен")
      }
      catch(err){
        res.json(err.toString())
      }
    },
  getSeanses: async (req, res) => {
    try {
      const showSeanses = await Seans.find().populate("film").populate("hall");
      res.json(showSeanses);
    } catch (error) {
      res.json(error);
    }
  },

  getOneSeans: async (req, res) => {
    try {
      const seansGetted = await Seans.findById(req.params.id)
        .populate("film")
        .populate("hall");
      res.json(seansGetted);
    } catch (error) {
      res.json(error);
    }
  },

  editSeansToBusyPlace: async (req, res) => {
    try {
      const seans = await Seans.findById(req.params.id);
      await Seans.findByIdAndUpdate(seans._id, {
        $addToSet: {
          place: req.body.place,
        },
      });
      res.json("Успешно");
    } catch (error) {
      res.json(error);
    }
  },
};
