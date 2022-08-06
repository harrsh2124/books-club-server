const User = require('../../models/User');
const { comparePassword } = require('../../utils/encryptDecryptPassword');
const generateJWT = require('../../utils/generateJWT');
const logger = require('../../utils/logger');
const Response = require('../../utils/response');

const SignIn = async (req, res) => {
    try {
        const { user_id, password } = req.body;

        const existingUser = await User.findOne({
            $or: [
                {
                    email: user_id
                },
                {
                    mobile_number: user_id
                }
            ]
        }).select('+password');

        if (!existingUser) {
            return Response(req, res, 400, 'User does not exist');
        }

        if (!existingUser.is_verified) {
            return Response(req, res, 400, 'User is not verified');
        }

        if (!(await comparePassword(password, existingUser.password))) {
            return Response(req, res, 400, 'Incorrect password');
        }

        const jwtToken = generateJWT({
            user_id: existingUser._id
        });

        return Response(req, res, 200, 'User verified successfully', {
            token: jwtToken
        });
    } catch (error) {
        logger.error(error.message);
        return Response(req, res);
    }
};

module.exports = SignIn;
