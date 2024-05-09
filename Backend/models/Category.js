// console.log('categorySchema');

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String // will created by admin and access by user 
    }
}, {timestamps: true})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;