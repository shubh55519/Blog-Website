// console.log('favoriteRouter');

const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const router = express.Router();

router
.route('/')
.post(favoriteController.createFavorite)

router
.route('/:id')
.get(favoriteController.getFavorite)

module.exports = router;