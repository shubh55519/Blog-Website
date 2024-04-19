const mongoose = require("mongoose");

const blogStatusSchema = new mongoose.Schema({
    approved:{
        type:Boolean
    },
    rejected:{
        type: Boolean
    },
    draft:{
        type: Boolean
    }
})

const blog_Status_Schema = mongoose.model('blog_Status_Schema', blogStatusSchema)
module.exports = blog_Status_Schema;