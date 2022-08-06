const jwt = require('jsonwebtoken');
const { app } = require('./env');

const generateJWT = (payload) => {
    return jwt.sign(payload, app.JWT_SECRET);
};

module.exports = generateJWT;
