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
        ref:"Blog"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
const Favorites = mongoose.model('Favorites', favoritesSchema)
module.exports = Favorites;  