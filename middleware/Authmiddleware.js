console.log('requireAuth');
const jwt = require('jsonwebtoken');


const adminAuth = (req, res, next) =>{
    const token = req.headers.jwt;
    console.log(token);
    
        const decodedToken = jwt.decode(token)
        if(decodedToken.isAdmin){
        next();
        }else{
            res.status(400).json({message:"Not Admin"});
        }
}

const requireAuth = (req, res, next)=>{
    // const {name, email, password, isAdmin} = req.body;
    // console.log('requireAuth line 7: ',name, email, password, isAdmin);
    let token = req.headers.jwt;

    console.log('requireAuth: line 10 - token -> ', token);
    let loggedIn = false;
    if (token) {
        jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', (err, decodedToken)=>{
            console.log('line 14: token---> ', token);
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
        res.status(404).json({message:"Not a User"});
    }else{
        console.log('next()-running');
        next();
    }
}

module.exports = {requireAuth, adminAuth};