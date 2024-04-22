const User = require('../models/User');
const jwt = require('jsonwebtoken');
// console.log("jwt -> ", jwt);

const maxAge = 60*60*1000;
const createToken = user =>{
  return jwt.sign({name:user.name, email: user.email, isAdmin: user.isAdmin}, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', {
    expiresIn:maxAge
  });
}

exports.signup = async (req, res) => {
    const {name, email, password} = req.body;

    try {
      const user = await User.create({name:name, email:email, password: password});
      const token = createToken(user);
      res.setHeader('jwt', token);
      console.log(user._id);
      res.status(201).json({user:user._id});
    } catch (err) {
    //const errors = handleError(err);
    res.status(400).json({err: err.message});
    }
  }

exports.login = async (req, res) => {
    const {email, password} = req.body;
    // console.log(' authController => email, password--> ', email, password);

    try {
        const user = await User.login(email, password);
        console.log('user-> ', user);
        const token = createToken(user._id);
        console.log('token-> ', token);
        res.setHeader('jwt', token);
        console.log('user._id ->', user._id);
        res.status(200).json({user : user._id});
        // res.status(200).json(token);

    } catch (error) {
        console.log(error.message);
      //const errors = handleError(error);
        res.status(400).json({error: error.message});
    }
  }