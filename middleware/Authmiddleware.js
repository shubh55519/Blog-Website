const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt;
    let loggedIn = true;
    if (token) {
        jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', (err, decodedToken)=>{
            if (err) {
                loggedIn = false;
            }
        })
    } else {
        // res.redirect('/login')
        loggedIn = false;
    }
}