const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    passwaord:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address"
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"paymentInformation"
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rating"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("users", userSchema);

module.exports = User;