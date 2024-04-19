const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        uppercase: true
    },
    content:{
        tpye: String,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    UpdatedAt:{
        type:Date,
        default: Date.now()
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user_Schema"
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category_Schema"
    },
    blog_status_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"blog_Status_Schema"
    },
    blog_visibility_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"blog_Visibility_Schema"
    },

})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;