const mongoose  = require("mongoose");

const cartItems = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    size: {
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
})
const CartItems = mongoose.model("cartItems",cartItems);
module.exports = CartItems;