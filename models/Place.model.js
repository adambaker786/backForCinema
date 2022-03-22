const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  number: {
    type: Number,
  },
  hall: {
    type: mongoose.Types.ObjectId,
    ref: "Hall",
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
