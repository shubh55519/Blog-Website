const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router
.route('/category')  // Categories
.post(adminController.createCategory)     // only for admin

router
.route('/blog-status')  // Statuses
.post(adminController.createStatus)

router
.route('/blog-visibility')  // Visibility
.post(adminController.createVisibility)

// ****************      convention id route should placed after the regular route      ****************

router
.route('/blogs/:id')  // Blog
.delete(adminController.deleteBlog) // will put and merge with getMyBlogs delete

router
.route('/category/:id')  // Category
.patch(adminController.updateCategory)  
.delete(adminController.deleteCategory)

router
.route('/blog-status/:id')  // Status
.patch(adminController.updateStatus)  
.delete(adminController.deleteStatus)

router
.route('/blog-visibility/:id')  // Visibility
// .get(adminController.getVisibility)  
.patch(adminController.updateVisibility)
.delete(adminController.deleteVisibility)

module.exports = router;