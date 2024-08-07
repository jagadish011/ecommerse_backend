const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    paretCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    level:{
        type:Number,
        required:true
    }, 
});
const Category = mongoose.model("categories", categorySchema);
module.exports = Category