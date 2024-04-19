const express = require('express');
const blogController  = require('../controllers/blogController');

const router = express.Router();

router
.route('/')
.get(blogController.getAllBlogs)
// .post(blogController)

module.exports = router;