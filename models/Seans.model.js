const mongoose = require("mongoose");

const seansSchema = mongoose.Schema({
  time: {
    type: String,
  },
  film: {
    type: mongoose.Types.ObjectId,
    ref: "Film",
  },
});

const Seans = mongoose.model("Seans", seansSchema);

module.exports = Seans;
