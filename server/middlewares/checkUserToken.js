const jwt = require('jsonwebtoken');
const { app } = require('../utils/env');
const Response = require('../utils/response');

const checkUserToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return Response(req, res, 401, 'Unauthorized request');

        const user = jwt.verify(token, app.JWT_SECRET);
        req.user = user;
    } catch (error) {
        console.log(error);
        return Response(req, res, 403, 'Something went wrong');
    } finally {
        next();
    }
};

module.exports = checkUserToken;
