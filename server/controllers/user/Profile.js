const User = require('../../models/User');
const logger = require('../../utils/logger');
const Response = require('../../utils/response');

const GetUserProfile = async (req, res) => {
    try {
        console.log(req.user);

        const { user_id } = req.user;
        const user = await User.findOne({ user_id });

        if (!user) return Response(req, res, 400, 'User not found');

        return Response(req, res, 200, 'User found', {
            user
        });
    } catch (error) {
        logger.error(error.message);
        return Response(req, res);
    }
};

module.exports = GetUserProfile;
