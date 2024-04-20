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
        ref:"User"
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    blog_status_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Blog_Status"
    },
    // blog_visibility_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Blog_Visibility"
    // },
    blog_visibility:{
        type: Boolean
    }
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;