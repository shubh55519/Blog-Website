const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    user_type:{
        type: String
    }
})

const category_Schema = mongoose.model('category_Schema', categorySchema)
module.exports = category_Schema;