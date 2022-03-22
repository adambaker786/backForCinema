const mongoose = require("mongoose");

const busySchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  seans: {
    type: mongoose.Types.ObjectId,
    ref: "Seans",
  },
  place: {
    type: Number,
    required: true,
  },
});

const Busy = mongoose.model("Busy", busySchema);

module.exports = Busy;
