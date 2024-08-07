const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
     firstName:{
         type:String,
         required:true
     },
     lastName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:number,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})

const Address = mongoose.model("address", addressSchema)
module.exports = Address;