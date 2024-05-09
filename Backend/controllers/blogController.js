// console.log('BlogController');
const Blog = require("../models/Blog");
const jwt = require('jsonwebtoken');


exports.getBlog = async (req, res)=>{
    // if Anonymous || if Auth || if Admin
    const id = req.params.id;
    try {
        const blog = await Blog.findById(id);
        res.status(200).json(blog)
    } catch (err) {
        console.log('Err' + err.message);
    }
}

exports.getMyBlogs = async (req, res)=>{
    
    try {
        // if Anonymous ==> || if Auth || if Admin
        let filter;
        let token = req.headers.jwt;
        
        const decodedToken = jwt.decode(token);
            console.log(decodedToken);
        filter = {
            creater:`${decodedToken.id}`,
            }
        const blogs = await  Blog.find(filter).populate('category').populate('creater','-password -_id -email -createdAt -updatedAt -isAdmin -__v').populate('status').populate('visibility');
        res.status(200).json(blogs);
    } catch (err) {
        console.log('bloglistCont=> Err -> ' + err);
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
    
    console.log('deleteBlog ',req.params.id);
    const token = req.headers.jwt;
    const decodedToken = jwt.decode(token);
    
    const id = req.params.id;

    try {
        // have: User ID   Blog ID    
        // need: Blogs Creater ID
        const blog = await Blog.findOne({_id: id});
        const createrID = blog.creater;
        if(decodedToken.id == createrID){
           await Blog.deleteOne({_id: id})
            res.status(200).json('Blog Deleted')
        }else{
            res.status(400).json({});
        }
        //             OR
        // Blog.deleteOne({_id:id, creater: decodedToken.id})
    } catch (err) {
        console.log('Err' + err.message);
        res.status(400).json({});
    }
}

exports.updateBlog = async(req, res)=>{
    const id = req.params.id;
    try {
        const update = await Blog.findById(id);
        update.title = req.body.title;
        update.content = req.body.content;
        const updatedBlog = await update.save();
        console.log(updatedBlog);
        res.status(200).json('You updated the blog')
    } catch (err) {
        console.log('Err: ',err.message);
    }
}