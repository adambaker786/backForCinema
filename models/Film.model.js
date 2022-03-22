const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  hall: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hall",
  },
  discription: {
    director: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    smallText: {
      type: String,
      required: true,
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      required: true,
    },
  },
});
const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
