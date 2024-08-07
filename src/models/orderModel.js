const mongoose = require("mongoose");

const orderSchema  = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems"
    }],
    orderDate:{
        type: Date,
        default: Date.now(),
        required: true
    },
    deliveryDate:{
        type: Date,
        required: true 
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"address"
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String
        },
        paymentId:{
            type:String
        },
        paymentStatus:{
            type:String,
            default:"PENDING"
        }
    },
    totalPrice:{
        type:Number,
        required: true
    },
    totalDiscountPrice:{
        type:Number,
        required: true
    },
    discount:{
        type:Number,    
        required: true
    },
    orderStatus:{
        type:String,
        default:"PENDING"
    },
    totalItems:{
        type:Number,
        required: true  
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
const Orders = mongoose.model("orders", orderSchema);
module.exports = Orders;