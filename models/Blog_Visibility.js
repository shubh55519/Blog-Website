const mongoose = require("mongoose");

const blogVisibiltySchema = new mongoose.Schema({
    visibilty:{
        type: Boolean
    }
})

const blog_Visibility_Schema = mongoose.model('blog_Visibility_Schema', blogVisibiltySchema)
module.exports = blog_Visibility_Schema;