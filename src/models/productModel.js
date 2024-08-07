const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
    },
    discountedPercentage:{  
        type:Number, 
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type: String,
    },
    color:{
        type:String
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imgUrl:{
        type:String,
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    numRatings:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    }
});

const Products = mongoose.model("products",productSchema);

module.exports = Products;