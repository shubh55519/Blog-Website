// const Category = require("../models/Category");

// exports.getAllCategory = async(req, res)=>{
//     try {
//         const category = await Category.find();
//         res.status(200).json(category);
//     } catch (err) {
//         console.log('Err' + err);
//     }
// }
// exports.createCategory = async(req, res)=>{
//     try {
//        const category = await Category.create({
//         name: req.body.name
//        }) 
//        category.save();
//        res.status(200).json(category);
//     } catch (err) {
//         console.log('Err' + err);
//     }
// }
// exports.updateCategory = async(req, res)=>{
//     const id  = req.param.id;
//     try {
//         const category = await Category.findById(_id === id);
//         category.updateOne()
//     } catch (err) {
//         console.log('Err' + err);
//     }
// }
// exports.deleteCategory = async(req, res)=>{
//     const id  = req.param.id;
//     try {
//         const deleteCategory = await Category.findById(_id === id)
//         await deleteCategory.deleteOne()
//     } catch (err) {
//         console.log('Err' + err);
//     }
// }