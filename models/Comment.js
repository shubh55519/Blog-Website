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
        createdAt: Date.now()
    }
})
const comment_Schema = mongoose.model('comment_Schema', commentSchema)
module.exports = comment_Schema;