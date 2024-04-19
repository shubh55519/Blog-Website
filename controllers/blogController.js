console.log('BlogController');
const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) =>{
    try {
        const blogs = await  Blog.find();
        console.log(blogs);
        res.json(blogs)
    } catch (err) {
        console.log('Err' + err);
    }
}
exports.createBlog = async (req, res) =>{
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const blogPost = await blog.save();
        res.json(blogPost);
    } catch (err) {
        console.log('Err' + err);
    }
}