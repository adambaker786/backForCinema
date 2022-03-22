const mongoose = require("mongoose")

const hallSchema = mongoose.Schema({
    hallNumber: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

const Hall = mongoose.model("Hall", hallSchema)

module.exports = Hall