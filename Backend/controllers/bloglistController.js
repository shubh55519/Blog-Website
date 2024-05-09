const jwt = require("jsonwebtoken");
const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
    
    const limit = req.query.limit;
    const page= req.query.page;
    const offset = (page - 1) * limit;
    const sort = {}; // ex: {column name: ASC || DESC}
    let name = req.query.name ;
    let direction =  req.query.direction;
    name ? (sort[name] = direction): null;  
    direction ?  (sort[name]= direction) : null;

    const match = new RegExp(req.query.search,"i");
    // console.log(new RegExp(req.query.search ,"i"));

    try {
        let filter;
        let token = req.headers.jwt;

        console.log("bloglistCont=> line 11-->: token", token);
        if (token) { // cookie is there and jwt 
            jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', (notVerified, decodeToken) => {
                if (notVerified) {   // cookie is there and jwt but jwt does not verify
                    console.log('jwt not verified');
                    filter = {
                        status: "6630b123250f76e15ed70560", // approved
                        visibility: "6624dda25ecb701aa0f79293", //public
                    }
                } else if (decodeToken.isAdmin == false) {      //  jwt verify  
                    
                    console.log('jwt verify as not admin');
                    filter = {
                        status: "6630b123250f76e15ed70560", // approved
                        visibility: ["6624ddb05ecb701aa0f79299", "6624dda25ecb701aa0f79293"],  // protected  //public  
                    }
                } else if (decodeToken.isAdmin == true) {      // jwt verify  && admin
                    console.log('jwt verify as admin');
                    filter = {
                        status: ["6630b123250f76e15ed70560", "6624da65d39d33ee85c58154", "6624da6cd39d33ee85c58157"], // approved   //reject   // draft
                        visibility: ["6624ddb05ecb701aa0f79299", "6624dda25ecb701aa0f79293", "6624dda95ecb701aa0f79296"]  // protected  //public  //private
                    }
                }
            })
        } else { // cookies is there but not jwt
            console.log('jwt is not there');
            filter = {
                status: "6630b123250f76e15ed70560", // approved
                visibility: "6624dda25ecb701aa0f79293", //public
            }
        }
        // filter.$or = [{ name: match }, { content: match }];
        let newFilter = {...filter, ...{$or :[{ title: match }, { content: match }]}}
        
        const blogs = await Blog.find(newFilter).skip(offset).limit(limit).sort(sort).select('category status visibility creater title createdAt updatedAt');
        res.status(200).json(blogs);

    } catch (err) {
        console.log('bloglistCont=>line 52: Err -> ' + err);
    }
}

exports.getBlog = async (req, res) => {
    // if Anonymous || if Auth || if Admin
    const id = req.params.id;
    console.log(id);

    try {

        const token = req.headers.jwt;
        let filter;
        if (token) {
            jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f', async (err, decodedToken) => {
                console.log('decodedToken: ', decodedToken);
                if (err) {
                    filter = {
                        _id: id,
                        status: "6624da5cd39d33ee85c58151",     // approved  
                        visibility: "6624dda25ecb701aa0f79293"  // public
                    }
                } else if (decodedToken.isAdmin == true) {  // Admin
                    console.log('Admin');
                    filter = {
                        _id: id,
                    }
                }
                else if (decodedToken.isAdmin == false) { // User
                    console.log('User');
                    filter={
                        $or: [{_id:id, creater: decodedToken.id}, {
                            _id: id,
                            status: "6624da5cd39d33ee85c58151", // approved 
                            visibility: ["6624ddb05ecb701aa0f79299", "6624dda25ecb701aa0f79293"]  // protected  //public
                        } ]
                    }
                }
            })
        } else {
            filter = {
                _id: id,
                status: "6624da5cd39d33ee85c58151", // approved  
                visibility: "6624dda25ecb701aa0f79293"  // protected  //public
            }
        }
        const blog = await Blog.findOne(filter)
            .populate('category', '-createdAt -updatedAt -__v')
            .populate('creater', '-password -_id -email -createdAt -updatedAt -__v')
            .populate('visibility', '-_id')
            .populate('status', '-_id');
            if(!blog){
                res.status(400).json('blog not found'); 
            }else{
                res.status(200).json(blog);
            }
    } catch (err) {
        console.log('Err: ' + err.message);
    }
}