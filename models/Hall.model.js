const mongoose = require("mongoose");

const hallSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const Hall = mongoose.model("Hall", hallSchema);

module.exports = Hall;
