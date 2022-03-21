/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty */
const Place = require("../models/Place.model");

module.exports.placeController = {
  getPlaces: async (req, res) => {
    try {
      const places = await Place.find();
      res.json(places);
    } catch (error) {
      res.json(error);
    }
  },

  addPlace: async (req, res) => {
    try {
      const { id } = req.user;
      const placesList = await Place.find();
      const placeAdded = await Place.create({
        user: id,
        number: placesList.length + 1,
      });
      res.json(placeAdded);
    } catch (error) {
      res.json(error);
    }
  },

  deletePlace: async (req, res) => {
    try {
      const place = await Place.findOne({ user: req.user.id });
      await Place.findByIdAndDelete(place._id);
      res.json("Успех");
    } catch (error) {
      res.json(error);
    }
  },
};
