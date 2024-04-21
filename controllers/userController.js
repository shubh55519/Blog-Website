const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 60*60*1000;
const createToken = user =>{
  return jwt.sign({name:user.name, email: user.email}, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', {
    expiresIn:maxAge
  });
}

exports.signup = async (req, res) => {
    const {name, email, password} = req.body;
  
    try {
      const user = await User.create({name:name, email:email, password: password});
      const token = createToken(user);
      res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge*1000});
      res.status(201).json({user:user._id});
    } catch (err) {
    //   const errors = handleError(err);
      res.status(400).json({err: err.message});
    }
  }

exports.login = async (req, res) => {
    const {email, password} = req.body;
    console.log(' authController => email, password-->', email, password);
  
    try {
  
     const user = await User.login(email, password);
     const token = createToken(user._id);
     res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge*1000});
     console.log(user._id);
     res.status(200).json({user : user._id});
  
    } catch (error) {
      console.log(error.message);
    //   const errors = handleError(error);
      res.status(400).json({error: error.message});
    }
  }