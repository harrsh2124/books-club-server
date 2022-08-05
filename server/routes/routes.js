const express = require('express');
const AuthRoute = require('./auth');

const routes = express();
routes.use('/auth', AuthRoute);

module.exports = routes;
