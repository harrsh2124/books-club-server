const express = require('express');
const GetUserProfile = require('../../controllers/user/Profile');
const checkUserToken = require('../../middlewares/checkUserToken');
const BookRoute = require('./book');

const UserRoute = express.Router();

UserRoute.get('/profile', checkUserToken, GetUserProfile);
UserRoute.use('/book', BookRoute);

module.exports = UserRoute;
