// console.log('commentSchema');

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment:{
        type: String
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    // createdAt:{
    //     type:Date,
    //     default: Date.now()
    // }
}, {timestamps: true})
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment;