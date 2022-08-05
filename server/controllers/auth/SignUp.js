const crypto = require('crypto');
const User = require('../../models/User');
const { encryptPassword } = require('../../utils/encryptDecryptPassword');
const env = require('../../utils/env');
const SendMail = require('../../utils/mailer');
const Response = require('../../utils/response');

const UserSignUp = async (req, res) => {
    try {
        const { email, password, first_name, last_name, mobile_number } = req.body;

        const existingUser = await User.findOne({
            $or: [
                {
                    email
                },
                {
                    mobile_number
                }
            ]
        });

        if (existingUser) {
            return Response(req, res, 400, 'User already exists');
        }

        const encryptedPassword = await encryptPassword(password);

        const user = new User({
            email,
            password: encryptedPassword,
            first_name,
            last_name,
            mobile_number
        });
        user.user_token = crypto.randomBytes(20).toString('hex');
        await user.save();

        console.log(user);

        const emailSubject = 'Confirm your email address';
        const emailContext = {
            name: `${first_name} ${last_name}`,
            confirmation_url: `${env.app.CLIENT_URL}/confirm-user/${user.user_token}/${user._id}`
        };
        SendMail(email, emailSubject, emailContext, 'WelcomeUser');

        return Response(req, res, 200, 'User created successfully');
    } catch (error) {
        return Response(req, res);
    }
};

module.exports = UserSignUp;
