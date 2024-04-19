const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
    user_type:{
        type: String
    }
})

const user_Type_Schema = mongoose.model('user_Type_Schema', userTypeSchema)
module.exports = user_Type_Schema;