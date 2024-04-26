console.log('requireAuth');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// const checkUser = (req, res, next)=>{
//     let token = req.headers.cookie;
//     token = token.substring(4);
//     console.log(token);
//     if (token) {
//         jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', async (err, decodedToken)=>{
//             if (err) {
//                 console.log('token expired');
//                 // console.log(err);
//                 res.locals.user = null;
//                 next();
//             } else {
//                 console.log(decodedToken);
//                 let user = await User.findById(decodedToken.id);
//                 res.locals.user = user;
//                 next();
//             }
//         })
//     } else {
//         res.locals.user = null;
//         next();
//     }
// }

const requireAuth = (req, res, next)=>{
    // console.log(req);
    const {name, email, password, isAdmin} = req.body;
    console.log('requireAuth line 32: ',name, email, password, isAdmin);
    let token = req.headers.jwt;

    // console.log('requireAuth: line 33 - token -> ', token);
    console.log('requireAuth: line 36 - token -> ', token);
    let loggedIn = true;
    if (token) {
        jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', (err, decodedToken)=>{
            console.log('line 40: token---> ', token);
            console.log(decodedToken);
            if (err) {
                console.log(err.message);
                loggedIn = false;
            }
        })
    } else {
        console.log("else in middleware");
        loggedIn = false;
    }
    if(loggedIn == false){
        console.log('loggedIn-false');
        res.status(404).json({});
    }else{
        console.log('next()-running');
        next();
    }
}

module.exports = {requireAuth};