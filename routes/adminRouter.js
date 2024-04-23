// console.log('adminRouter');

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router
.route('/blogs')  // Blogs
.get(adminController.getAllBlogs)   // Need to add filter according to status


router
.route('/category')  // Categories
.get(adminController.getAllCategory)  
.post(adminController.createCategory)

router
.route('/blog-status')  // Statuses
.get(adminController.getAllStatus)  
.post(adminController.createStatus)

router
.route('/blog-visibility')  // Visibility
.get(adminController.getAllVisibility)  
.post(adminController.createVisibility)

// ****************         convention id route should placed after the regular route        ****************

router
.route('/blogs/:id')  // Blog
.get(adminController.getBlog)
.delete(adminController.deleteBlog)


router
.route('/category/:id')  // Category
.patch(adminController.updateCategory)
.delete(adminController.deleteCategory)

router
.route('/blog-status/:id')  // Status
.get(adminController.getStatus)  
.patch(adminController.updateStatus)
.delete(adminController.deleteStatus)

router
.route('/blog-visibility/:id')  // Visibility
.get(adminController.getVisibility)  
.patch(adminController.updateVisibility)
.delete(adminController.deleteVisibility)

module.exports = router;