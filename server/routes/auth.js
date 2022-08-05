const express = require('express');
const UserSignUp = require('../controllers/auth/SignUp');
const VerifyUser = require('../controllers/auth/VerifyUser');

const AuthRoute = express.Router();

AuthRoute.post('/signup', UserSignUp);
AuthRoute.put('/verify-user', VerifyUser);

module.exports = AuthRoute;
