const Seans = require("../models/Seans.model");

module.exports.seansController = {
  addSeanses: async (req, res) => {
    try {
      const { time, film } = req.body;
      const seans = await Seans.create({
        time,
        film,
      });
      res.json(seans);
    } catch (error) {
      res.json(error);
    }
  },
  getSeanses: async (req, res) => {
    try {
      const showSeanses = await Seans.find().populate("film");
      res.json(showSeanses);
    } catch (error) {
      res.json(error);
    }
  },
};
