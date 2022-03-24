const News = require("../models/News.model");

module.exports.newsController = {
  getAllNews: async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
  addNews: async (req, res) => {
    try {
      const { img, date, info, title } = req.body;

      const news = await News.create({
        img,
        date,
        title,
        info,
      });
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
};
