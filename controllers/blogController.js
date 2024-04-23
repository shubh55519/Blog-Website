// console.log('BlogController');
const Blog = require("../models/Blog");
const jwt = require('jsonwebtoken');

exports.getAllBlogs = async (req, res) =>{
    try {
        // if Anonymous ==> || if Auth || if Admin
        // const token = req.cookies.jwt;
        let filter;
        
        // const cookies = req.cookies; // null  // not null
        // console.log(cookies);
        let token = req.headers.cookie;
        console.log('token->', token);
        // console.log('token.cookie ->', token.cookie);
        token = token.substring(4);
        
        console.log(token);
            if(token){ // cookie is there and jwt 
                jwt.verify(token, 'c3e3863ec9ac2510586d63a854148a1569e42bb4fd1c4f9002c9a0be8482618f',(notVerified, decodeToken)=>{
                if(notVerified){   // cookie is there and jwt but jwt does not verify
                    console.log('jwt not verified');
                        console.log(notVerified.message);
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
        // console.log(blogs);
        res.status(200).json(blogs);
    } catch (err) {
        console.log('Err -> ' + err);
        // console.log('Err -> ' + err.message);
    }
}

exports.getBlog = async (req, res)=>{
    // if Anonymous || if Auth || if Admin
    const id = req.param.id;
    try {
        const blog = await Blog.findById(_id === id);
        res.status(200).json(blog)
    } catch (err) {
        console.log('Err' + err.message);
    }
}
exports.getMyBlogs = async (req, res)=>{
    //  if Auth
    const id = req.param.id;
    try {
        const blog = await Blog.findById(_id === id);
        res.status(200).json(blog)
    } catch (err) {
        console.log('Err' + err.message);
    }
}

exports.createBlog = async (req, res) =>{
    
    try {
        const blog = await Blog.create(req.body) // req.body takes all parameter
        const blogPost = await blog.save();
        res.status(200).json(blogPost);
    } catch (err) {
        console.log('Err' + err.message);
    }
}

exports.deleteBlog = async (req, res) =>{
    const id = req.param.id;
    try {
        await Blog.deleteOne( _id === id);
    } catch (err) {
        console.log('Err' + err.message);
    }
}