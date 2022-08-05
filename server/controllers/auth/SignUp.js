const User = require('../../models/User');
const { encryptPassword } = require('../../utils/encryptDecryptPassword');
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
        await user.save();

        console.log(user);

        return Response(req, res, 200, 'User created successfully');
    } catch (error) {
        return Response(req, res);
    }
};

module.exports = UserSignUp;
