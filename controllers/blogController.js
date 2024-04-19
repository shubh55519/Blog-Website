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