const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
   
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps: true})
const Favorites = mongoose.model('Favorites', favoritesSchema)
module.exports = Favorites;  