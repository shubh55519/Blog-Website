const jwt  = require("jsonwebtoken");
const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) =>{
    try {
        // if Anonymous ==> || if Auth || if Admin
        // const token = req.cookies.jwt;
        let filter;
        // const cookies = req.cookies; // null  // not null
        // console.log(cookies);
        let token = req.headers.jwt;
                
        console.log("bloglistCont=> line 13-->: token",token);
            if(token){ // cookie is there and jwt 
                jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f',(notVerified, decodeToken)=>{
                    if(notVerified){   // cookie is there and jwt but jwt does not verify
                    console.log('jwt not verified');
                        filter = {
                            status: "6624da5cd39d33ee85c58151", // approved
                            visibility: "6624dda25ecb701aa0f79293", //public
                        }
                }else{      //  jwt verify
                    console.log('jwt verify');
                    filter = {
                            status: "6624da5cd39d33ee85c58151", // approved
                            visibility: ["6624ddb05ecb701aa0f79299","6624dda25ecb701aa0f79293"],  // protected  //public  
                    }
                }
                })
            }else{ // cookies is there but not jwt
                console.log('jwt is not there');
                filter = {
                    status: "6624da5cd39d33ee85c58151", // approved
                    visibility: "6624dda25ecb701aa0f79293", //public
                }
            }
        
        const blogs = await  Blog.find(filter).populate('category').populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v').populate('status').populate('visibility');
        res.status(200).json(blogs);
    } catch (err) {
        console.log('bloglistCont=>line 42: Err -> ' + err);
    }
}

exports.getBlog = async (req, res)=>{
    // if Anonymous || if Auth || if Admin
    const id = req.params.id;
    // console.log(req);
    try {
        const blog = await Blog.findById(id);
        res.status(200).json(blog)
    } catch (err) {
        console.log('Err ' + err.message);
    }
}