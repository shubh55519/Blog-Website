const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
    comment:{
        tpye: String,
    },
    createdAt:{
        createdAt: Date.now()
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"blog_Schema"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user_Schema"
    }
})
const favorites_Schema = mongoose.model('favorites_Schema', favoritesSchema)
module.exports = favorites_Schema;  