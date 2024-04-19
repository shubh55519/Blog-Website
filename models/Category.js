const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    user_type:{
        type: String
    }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;