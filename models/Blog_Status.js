const mongoose = require("mongoose");

const blogStatusSchema = new mongoose.Schema({
    status:{
        type: String
    }
})

const Blog_Status = mongoose.model('Blog_Status', blogStatusSchema)
module.exports = Blog_Status;