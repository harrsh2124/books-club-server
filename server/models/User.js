const mongoose = require('mongoose');
const RoleEnum = require('../config/enums/RoleEnum');
const { ObjectId } = mongoose.Schema;

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
            required: true,
            select: false
        },
        profile_photo_url: {
            type: ObjectId,
            ref: 'Image'
        },
        user_token: {
            type: String,
            trim: true,
            select: false
        },
        is_verified: {
            type: Boolean,
            default: false
        },
        is_deleted: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            trim: true,
            default: 'USER',
            enum: RoleEnum
        },
        books: [
            {
                type: ObjectId,
                ref: 'Book',
                select: false
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);
