const express = require('express');
const AddBook = require('../../controllers/user/book/addBook');
const checkUserToken = require('../../middlewares/checkUserToken');

const BookRoute = express.Router();

BookRoute.post('/create', checkUserToken, AddBook);

module.exports = BookRoute;
