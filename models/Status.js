const mongoose = require("mongoose");

const blogStatusSchema = new mongoose.Schema({
    status:{
        type: String  // approved || reject || draft 
    }
}, {timestamps: true})

const Status = mongoose.model('Status', blogStatusSchema)
module.exports = Status;