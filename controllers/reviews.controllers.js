const Review = require("../models/Review.modal")

module.exports.reviewsController = {
    addRev: async (req,res)=>{
        const {text, film}= req.body
        try{
            const review = await Review.create({
                user: req.user.id,
                film,
                text
            })
            const reviewGet = await Review.findById(review._id).populate("user")
            res.json(reviewGet)
        }
        catch(err){
            res.json(err.toString())
        }
    },
    getReview: async (req, res)=>{
        
        try{
            const review  = await Review.find({
                film: req.params.id
            }).populate("user")
            res.json(review)
        }
        catch(err){
            res.json(err.toString())
        }
    }
}