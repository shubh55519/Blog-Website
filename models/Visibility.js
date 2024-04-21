const mongoose = require("mongoose");

const blogVisibiltySchema = new mongoose.Schema({
    visibility:{
        type: String // public || private || protected
    }
}, {timestamps: true})

const Visibility = mongoose.model('Visibility', blogVisibiltySchema)
module.exports = Visibility;