console.log('BlogController');
const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) =>{
    try {
        // if Anonymous ==> || if Auth || if Admin
        // net ninja code
        const blogs = await  Blog.find({title:req.body.title});
        console.log(blogs);
        res.status(200).json(blogs)
    } catch (err) {
        console.log('Err' + err.message);
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
    const blog = await Blog.create({
        title: req.body.title,
        content: req.body.content
    })
    await blog.save();
    try {
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