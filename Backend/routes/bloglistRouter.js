const express = require('express');
const bloglistController  = require('../controllers/bloglistController');
const router = express.Router();

router
.route('/')
.get(bloglistController.getAllBlogs)

router
.route('/:id')
.get(bloglistController.getBlog)

module.exports = router;