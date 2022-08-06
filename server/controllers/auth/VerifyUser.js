const User = require('../../models/User');
const logger = require('../../utils/logger');
const Response = require('../../utils/response');

const VerifyUser = async (req, res) => {
    try {
        const { user_token, _id } = req.body;

        const existingUser = await User.findOne({
            _id,
            user_token
        }).select('+user_token');

        if (!existingUser) {
            return Response(req, res, 400, 'User does not exist');
        }

        existingUser.is_verified = true;
        existingUser.user_token = null;
        await existingUser.save();

        return Response(req, res, 200, 'User verified successfully');
    } catch (error) {
        logger.error(error.message);
        return Response(req, res);
    }
};

module.exports = VerifyUser;
