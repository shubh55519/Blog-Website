// console.log('userController');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 60*60*1000;
const createToken = user =>{
  // console.log('user: ',user._id, user.name, user.email, user.isAdmin );
  return jwt.sign({id:user._id,name:user.name, email: user.email, isAdmin:user.isAdmin}, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', {
    expiresIn:maxAge
  });
}
// console.log(createToken(user));

exports.signup = async (req, res) => {
  // console.log(req);
    const {name, email, password, isAdmin} = req.body;
    console.log(name, email, password, isAdmin);
  
    try {
      const user = await User.create({name:name, email:email, password: password, isAdmin: isAdmin});
      // res.cookie('jwt', token, { httpOnly : true, maxAge : maxAge * 1000});
      console.log('userCont Line 25: ',user._id);
      res.status(201).json({ user: user._id});
    } catch (err) {
      res.status(400).json({err: err.message});
    }
  }

exports.login = async (req, res) => {
    const {email, password, isAdmin} = req.body;
    console.log('userController => email, password--> ',email, password, isAdmin);
  
    try {
     const user = await User.login(email, password, isAdmin);
     const token = createToken(user);
//  res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge*1000});
    console.log('userCont login=> line 37->:token: ', token);
    res.status(201).json({ token: token });

    } catch (error) {
      console.log(error.message);
      res.status(400).json({error: error.message});
    }
  }
