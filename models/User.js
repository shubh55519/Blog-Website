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
        reuired: true,
        minlength: 6
    },
    photo:{
        type: String
    },
    user_type_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_Type_Schema"
    }

})

const user_Schema = mongoose.model('user_Schema', userSchema)
module.exports = user_Schema;