const mongoose = require('mongoose');
const RoleEnum = require('../config/enums/RoleEnum');

const UserSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            required: true
        },
        last_name: {
            type: String,
            trim: true,
            required: true
        },
        mobile_number: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        profile_photo_url: {
            type: String,
            trim: true
        },
        user_token: {
            type: String,
            trim: true
        },
        is_verified: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            trim: true,
            default: 'USER',
            enum: RoleEnum
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);
