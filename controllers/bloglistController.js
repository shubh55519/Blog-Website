
const jwt  = require("jsonwebtoken");
const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) =>{

    try {
        let filter;
        let token = req.headers.jwt;
                
        console.log("bloglistCont=> line 11-->: token",token);
            if(token){ // cookie is there and jwt 
                jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f',(notVerified, decodeToken)=>{
                    if(notVerified){   // cookie is there and jwt but jwt does not verify
                    console.log('jwt not verified');
                        filter = {
                            status: "6630b123250f76e15ed70560", // approved
                            visibility: "6624dda25ecb701aa0f79293", //public
                        }
                }else if(decodeToken.isAdmin == false) {      //  jwt verify  
                    // console.log(decodeToken);
                    console.log('jwt verify as not admin');
                    filter = {
                            status: "6630b123250f76e15ed70560", // approved
                            visibility: ["6624ddb05ecb701aa0f79299","6624dda25ecb701aa0f79293"],  // protected  //public  
                    }
                }else if(decodeToken.isAdmin == true){      // jwt verify  && admin
                    console.log('jwt verify as admin');
                    filter = {
                        status: ["6630b123250f76e15ed70560", "6624da65d39d33ee85c58154", "6624da6cd39d33ee85c58157"], // approved   //reject   // draft
                        visibility: ["6624ddb05ecb701aa0f79299", "6624dda25ecb701aa0f79293", "6624dda95ecb701aa0f79296"]  // protected  //public  //private
                    }
                }
                })
            }else{ // cookies is there but not jwt
                console.log('jwt is not there');
                filter = {
                    status: "6630b123250f76e15ed70560", // approved
                    visibility: "6624dda25ecb701aa0f79293", //public
                }
            }
        
        const blogs = await  Blog.find(filter).populate('category').populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v').populate('status').populate('visibility');
        res.status(200).json(blogs);
    } catch (err) {
        console.log('bloglistCont=>line 39: Err -> ' + err);
    }
}

exports.getBlog = async (req, res)=>{
    // if Anonymous || if Auth || if Admin
    const id = req.params.id;
    console.log(id);
    
    try {
        const token = req.headers.jwt;
        const decodedToken = jwt.decode(token);
        console.log('decodedToken: ', decodedToken);
        console.log('decodedToken.id: ', decodedToken.id);
        console.log('decodedToken.isAdmin: ', decodedToken.isAdmin);
        let filter;
        
    if(decodedToken.isAdmin==true){  // Admin
        console.log('Admin');
        filter = {
            status: ["6624da5cd39d33ee85c58151", "6624da65d39d33ee85c58154", "6624da6cd39d33ee85c58157"], // approved   //reject   // draft
            visibility: ["6624ddb05ecb701aa0f79299","6624dda25ecb701aa0f79293","6624dda95ecb701aa0f79296"]  // protected  //public  //private
        }
        const blog = await  Blog.find(filter).populate('category').populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v').populate('visibility','-_id').populate('status','-_id');
        res.status(200).json(blog)
    }
    else if(decodedToken.id && decodedToken.isAdmin == false ){ // User
        console.log('User');
        filter = {
            status: ["6624da5cd39d33ee85c58151", "6624da65d39d33ee85c58154", "6624da6cd39d33ee85c58157"], // approved   //reject   // draft
            visibility: ["6624ddb05ecb701aa0f79299","6624dda25ecb701aa0f79293"]  // protected  //public
        }
        const blog = await  Blog.findById(filter).populate('category').populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v').populate('visibility');
        res.status(200).json(blog)
    }else{
        // filter = {
        //     status: "6624da5cd39d33ee85c58151", // approved  
        //     visibility: ["6624ddb05ecb701aa0f79299","6624dda25ecb701aa0f79293"]  // protected  //public
        // }
        const blog = await  Blog.findById(id).populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v');
        res.status(200).json(blog)
    }

    // const blog = await  Blog.find(filter).populate('category','-_id -createdAt -updatedAt -__v' ).populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v');

    } catch (err) {
        console.log('Err: ' + err.message);
    }
}