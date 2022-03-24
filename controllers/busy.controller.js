const Busy = require("../models/Busy.model");

module.exports.busyController = {
  addBusy: async (req, res) => {
    
    try {
      const { id, num } = req.body;
      const busyAdded = await Busy.create({
        user: req.user.id,
        seans: id,
        place: num,
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
};
