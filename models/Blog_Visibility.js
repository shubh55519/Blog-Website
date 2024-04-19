const mongoose = require("mongoose");

const blogVisibiltySchema = new mongoose.Schema({
    visibilty:{
        type: Boolean
    }
})

const Blog_Visibility = mongoose.model('Blog_Visibility', blogVisibiltySchema)
module.exports = Blog_Visibility;