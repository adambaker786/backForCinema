const mongoose = require("mongoose");

const seansSchema = mongoose.Schema({
  time: {
    type: String,
  },
  film: {
    type: mongoose.Types.ObjectId,
    ref: "Film",
  },
  hall: {
    type: mongoose.Types.ObjectId,
    ref: "Hall",
  },
  place: [{
    type: Number,
    required: true
  }]
});

const Seans = mongoose.model("Seans", seansSchema);

module.exports = Seans;
