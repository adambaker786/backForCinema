/* eslint-disable no-empty */
const Genre = require("../models/Genre.model");

module.exports.genreController = {
  getGenres: async (req, res) => {
    try {
      const genre = await Genre.find();
      res.json(genre);
    } catch (error) {
      res.json(error);
    }
  },

  addGenre: async (req, res) => {
    try {
      const { name } = req.body;
      const addedGenre = await Genre.create({
        name,
      });
      res.json(addedGenre);
    } catch (error) {
      res.json(error);
    }
  },
};
