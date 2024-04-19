const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        //validate
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    photo:{
        type: String
    },
    user_type_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User_type"
    }

})

const User = mongoose.model('User', userSchema)
module.exports = User;