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

const Blog_Status = mongoose.model('Blog_Status', blogStatusSchema)
module.exports = Blog_Status;