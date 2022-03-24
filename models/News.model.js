const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    img: String,
    date: String,
    title: String,
    info: String
})

const News = mongoose.model("News", newsSchema);

module.exports = News