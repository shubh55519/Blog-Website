const express = require('express')
const router = express.Router();
const categoryRouter = require('../controllers/categoryController');

router
.route('/')
.get(categoryRouter.getAllCategory)
.post(categoryRouter.createCategory)

router
.route('/:id')
.patch(categoryRouter.updateCategory)
.delete(categoryRouter.deleteCategory)

module.exports = router;