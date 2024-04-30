const express = require('express');
const router = express.Router();
const userAccessController = require('../controllers/userAccessController');

router
.route('/blog-status')  // Statuses
.get(userAccessController.getAllStatus)  // will put it in auth user

router
.route('/blog-visibility')  // Visibility
.get(userAccessController.getAllVisibility) 


module.exports = router;