const express = require('express');
const UserSignUp = require('../controllers/auth/SignUp');
const UserSignIn = require('../controllers/auth/SignIn');
const VerifyUser = require('../controllers/auth/VerifyUser');

const AuthRoute = express.Router();

AuthRoute.post('/signup', UserSignUp);
AuthRoute.post('/signin', UserSignIn);
AuthRoute.put('/verify-user', VerifyUser);

module.exports = AuthRoute;
