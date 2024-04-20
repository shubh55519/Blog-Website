const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String // will created by admin and access by user 
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;