const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    ratings:{
        type:Number,
        required:true
    },

})
const Ratings = mongoose.model("ratings", ratingSchema);
module.exports = Ratings;