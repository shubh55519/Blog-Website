// console.log('commentSchema');

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment:{
        tpye: String,
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
}, {timestamps: true})
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment;