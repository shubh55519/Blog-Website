// console.log('adminController');
const Blogs = require('../models/Blog');
const Category = require('../models/Category');
const Status = require('../models/Status');
const Visibility = require('../models/Visibility');

// Blogs
exports.getAllBlogs = async (req, res) =>{
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (err) {
        console.log('Err '+ err.message);
    }
}
exports.getBlog = async (req, res) =>{  

    const id = req.params.id;
    try {
        const blog = await Blogs.findById(id);
        res.status(200).json(blog);
    } catch (err) {
        console.log('Err '+ err.message);
    }
}
exports.deleteBlog = async (req, res) =>{
    const id =  req.params.id;
    try {
        const deleteBlog = await Blogs.findByIdAndDelete(id)
        console.log(deleteBlog);
        if(!deleteBlog){
            res.status(404).json({error: "Blog Not found"})
        }else{
            res.status(200).json({message: "Blog Deleted Successfully"})
        }
    } catch (err) {
        console.log('deleteBlog =>Error-> ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Category
exports.getAllCategory = async (req, res) =>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.log("getAllCategory => Err-> " + err.message);
    }
}
exports.createCategory = async (req, res) =>{
    
    try {
        const category = await Category.create({
         name: req.body.name
        }) 
        await category.save();
        res.status(201).json(category);
     } catch (err) {
         console.log('createCategroy =>Err-> ' + err.message);
     }
}

exports.updateCategory = async (req, res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const updatedCategory = await Category.findById(id); 
        updatedCategory.name = req.body.name;
        await updatedCategory.save();
        res.status(200).json(updatedCategory)
    } catch (err) {
        console.log('updateCategory =>Err-> ' + err.message);
    }
}
exports.deleteCategory = async (req, res) =>{
    const id =  req.params.id;
    try {
        const deleteCategory = await Category.findByIdAndDelete(id)
        console.log(deleteCategory);
        if(!deleteCategory){
            res.status(404).json({error: "Category Not found"})
        }else{
            res.status(200).json({message: "Category Deleted Successfully"})
        }
        
    } catch (err) {
        console.log('deleteCategory =>Error-> ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Status

exports.getAllStatus = async (req, res) =>{
    try {
        const statuses = await Status.find();
        res.status(200).json(statuses);
    } catch (err) {
        console.log("getAllCategory => Err-> " + err.message);
    }
}

exports.getStatus = async (req, res) =>{  

    const id = req.params.id;
    try {
        const status = await Status.findById(id);
        res.status(200).json(status);
    } catch (err) {
        console.log('Err '+ err.message);
    }
}

exports.createStatus = async (req, res) =>{
    
    try {
        const createStatus = await Status.create({
         status: req.body.status
        }) 
        await createStatus.save();
        res.status(201).json(createStatus);
     } catch (err) {
         console.log('createStatus =>Err-> ' + err.message);
     }
}

exports.updateStatus = async (req, res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const updateStatus = await Status.findById(id); 
        updateStatus.status = req.body.status;
        await updateStatus.save();
        res.status(200).json(updateStatus)
    } catch (err) {
        console.log('updateStatus =>Err-> ' + err.message);
    }
}

exports.deleteStatus = async (req, res) =>{
    const id =  req.params.id;
    try {
        const deleteStatus = await Status.findByIdAndDelete(id)
        console.log(deleteStatus);
        if(!deleteStatus){
            res.status(404).json({error: "Status Not found"})
        }else{
            res.status(200).json({message: "Status Deleted Successfully"})
        }
        
    } catch (err) {
        console.log('deleteStatus =>Error-> ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Visibility

exports.getAllVisibility = async (req, res) =>{
    try {
        const visibility = await Visibility.find();
        res.status(200).json(visibility);
    } catch (err) {
        console.log('Err '+ err.message);
    }
} 

exports.getVisibility = async (req, res) =>{  

    const id = req.params.id;
    try {
        const visibility = await Visibility.findById(id);
        res.status(200).json(visibility);
    } catch (err) {
        console.log('Err '+ err.message);
    }
}

exports.createVisibility = async (req, res) =>{
    
    try {
        const createVisibility = await Visibility.create({
            visibility: req.body.visibility
        }) 
        await createVisibility.save();
        res.status(201).json(createVisibility);
     } catch (err) {
         console.log('createVisibility =>Err-> ' + err.message);
     }
}

exports.updateVisibility = async (req, res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const updateVisibility = await Visibility.findById(id); 
        updateVisibility.visibility = req.body.visibility;
        await updateVisibility.save();
        res.status(200).json(updateVisibility)
    } catch (err) {
        console.log('updateVisibility =>Err-> ' + err.message);
    }
}

exports.deleteVisibility = async (req, res) =>{
    const id =  req.params.id;
    try {
        const deleteVisibility = await Visibility.findByIdAndDelete(id)
        console.log(deleteVisibility);
        if(!deleteVisibility){
            res.status(404).json({error: "Visibility Not found"})
        }else{
            res.status(200).json({message: "Visibility Deleted Successfully"})
        }
        
    } catch (err) {
        console.log('deleteVisibility =>Error-> ' + err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}