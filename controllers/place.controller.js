/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty */
const Place = require("../models/Place.model");

module.exports.placeController = {
  getPlaces: async (req, res) => {
    try {
      // вывод всех мест
      const places = await Place.find();
      res.json(places);
    } catch (error) {
      res.json(error);
    }
  },

  addPlace: async (req, res) => {
    try {
      // бронь мест по нажатию на него с привязкой к пользователю
      const { id } = req.user;
      const { number } = req.body;
      const placeAdded = await Place.create({
        user: id,
        number,
      });
      res.json(placeAdded);
    } catch (error) {
      res.json(error);
    }
  },

  deletePlace: async (req, res) => {
    try {
      // отвязка места от пользователя
      const place = await Place.findOne({ user: req.user.id });
      await Place.findByIdAndDelete(place._id);
      res.json("Успех");
    } catch (error) {
      res.json(error);
    }
  },
};
