const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    },
    text: {
        type: String,
        required: true
    }
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review