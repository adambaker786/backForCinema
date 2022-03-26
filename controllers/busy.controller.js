const Busy = require("../models/Busy.model");

module.exports.busyController = {
  addBusy: async (req, res) => {
    try {
      const { placesList, id } = req.body;
      console.log(1);
      placesList.forEach(async (place) => {
        await Busy.create({
          user: req.user.id,
          seans: id,
          place,
        });
      });
      const userBusy = await Busy.find({ user: req.user.id });
      res.json(userBusy);
    } catch (error) {
      res.json(error);
    }
  },
  getBusy: async (req, res) => {
    try {
      const busy = await Busy.find().populate("seans").populate("film");
      res.json(busy);
    } catch (error) {
      res.json(error);
    }
  },

  getUserBusy: async (req, res) => {
    try {
      const userBusy = await Busy.find({ user: req.user.id }).populate({
        path: "seans",
        populate: "film",
      });
      res.json(userBusy);
    } catch (error) {
      res.json(error);
    }
  },
};
