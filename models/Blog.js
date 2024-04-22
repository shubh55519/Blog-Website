const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        uppercase: true
    },
    content:{
        type: String,
        required: true
    },
    creater:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    status:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Status"
    },
    visibility:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Visibility"
    }
    
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;