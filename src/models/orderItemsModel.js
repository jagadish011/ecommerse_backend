const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
});

const OrderItem =  mongoose.model("orderItems", orderItemSchema);
module.exports = OrderItem;