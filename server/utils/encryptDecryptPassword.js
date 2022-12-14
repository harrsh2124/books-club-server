const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, 10);
};

const comparePassword = async (plainPassword, encryptedPassword) => {
    return await bcrypt.compare(plainPassword, encryptedPassword);
};

module.exports = {
    encryptPassword,
    comparePassword
};
