const express = require('express');
const AuthRoute = require('./auth');
const UserRoute = require('./user');

const routes = express();
routes.use('/auth', AuthRoute);
routes.use('/user', UserRoute);

module.exports = routes;
