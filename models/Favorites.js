const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
    comment:{
        tpye: String,
    },
    createdAt:{
        type: Date,
        default: Date.now()
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
const Favorites = mongoose.model('Favorites', favoritesSchema)
module.exports = Favorites;  