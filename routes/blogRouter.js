// console.log('BlogRouter');
const express = require('express');
const blogController  = require('../controllers/blogController');

const router = express.Router();

router
.route('/')
.post(blogController.createBlog)
.get(blogController.getMyBlogs)

router
.route('/:id')
.get(blogController.getBlog)
// .patch(blogController.updateBlog)
.delete(blogController.deleteBlog)

module.exports = router;