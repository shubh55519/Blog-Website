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
        createdAt: Date.now()
    },
    UpdatedAt:{
        UpdatedAt: Date.now()
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

const blog_Schema = mongoose.model('blog_Schema', blogSchema)
module.exports = blog_Schema;