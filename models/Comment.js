const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment:{
        tpye: String,
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"blog_Schema"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user_Schema"
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment;