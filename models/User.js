// console.log('userSchema');

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
    isAdmin:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User_type"
        type: Boolean,
        default: false
    }

}, {timestamps: true})

userSchema.pre('save', async function(next){
    // console.log('new user about to be created & saved', this);
    // Hasing Password
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.statics.login = async function(email, password){

    console.log('User => email, password -->', email, password);
    const user = await this.findOne({email: email});
    // console.log(user);
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('User', userSchema)
module.exports = User;