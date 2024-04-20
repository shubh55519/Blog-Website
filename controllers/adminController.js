const Blogs = require('../models/Blog');
const Category = require('../models/Category');

exports.getAllBlogs = async (req, res) =>{
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (err) {
        console.log('Err'+ err.message);
    }
}
exports.getAllCategory = async (req, res) =>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.log("Err" + err.message);
    }
}
exports.createCategroy = async (req, res) =>{
    
    try {
        const newCat = await Category.create({
            name: req.body.name
        })
        await newCat.save();
    } catch (err) {
        console.log('Err' + err.message);
    }
}
exports.getBlog = async (req, res) =>{
    const id = req.param.id;

    try {
        const blog = await Blogs.findById(_id === id);
        res.status(200).json(blog);
    } catch (err) {
        console.log('Err'+ err.message);
    }
}
exports.updateCategory = async (req, res) =>{
    const id = req.param.id;
    try {
        const update = await Category.findById(_id === id); // 

    } catch (err) {
        console.log('Err' + err.message);
    }
}
exports.deleteCategory = async (req, res) =>{
    const id =  req.param.id;
    try {
        const deleteCat = await Category.where(`${_id}`).equals(`${id}`).select(`${_id}`);
        await deleteCat.deleteOne();
    } catch (err) {
        console.log('Err' + err.message);
    }
}