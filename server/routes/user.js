const express = require('express');
const GetUserProfile = require('../controllers/user/Profile');
const checkUserToken = require('../middlewares/checkUserToken');

const UserRoute = express.Router();

UserRoute.get('/profile', checkUserToken, GetUserProfile);

module.exports = UserRoute;
