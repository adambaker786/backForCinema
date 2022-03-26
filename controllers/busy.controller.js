const Busy = require("../models/Busy.model");

module.exports.busyController = {
  addBusy: async (req, res) => {
    try {
      const { placesList, id } = req.body;
      const busyAdded = await placesList.map((place) => {
        Busy.create({
          user: req.user.id,
          seans: id,
          place,
        });
      });
      res.json(busyAdded);
    } catch (error) {
      res.json(error);
    }
  },
  getBusy: async (req, res) => {
    try {
      const busy = await Busy.find().populate("user").populate("seans");
      res.json(busy);
    } catch (error) {
      res.json(error);
    }
  },

  getUserBusy: async (req, res) => {
    try {
      const userBusy = await Busy.find({ user: req.user.id });
      res.json(userBusy);
    } catch (error) {
      res.json(error);
    }
  },
};
