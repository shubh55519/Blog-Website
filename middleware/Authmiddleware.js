console.log('requireAuth');
const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next)=>{
    // console.log(req);
    const {name, email, password, isAdmin} = req.body;
    console.log('requireAuth line 8: ',name, email, password, isAdmin);
    let token = req.headers.jwt;

    // console.log('requireAuth: line 33 - token -> ', token);
    console.log('requireAuth: line 12 - token -> ', token);
    let loggedIn = false;
    if (token) {
        jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', (err, decodedToken)=>{
            console.log('line 16: token---> ', token);
            console.log(decodedToken);
            if (!err) {
                loggedIn = true;
            }else{
                console.log(err.message);
            }
        })
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