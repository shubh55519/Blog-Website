const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router
.route('/')
.get(adminController.getAllBlogs)   // Need to add filter according to status
.get(adminController.getAllCategory)  // Category
.post(adminController.createCategroy)

router
.route('/:id')
.get(adminController.getBlog)
.patch(adminController.updateCategory)
.delete(adminController.deleteCategory)

module.exports = router;