const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const CommentSchema = mongoose.Schema(
    {
        comment: {
            type: String,
            trim: true,
            required: true
        },
        commented_by: {
            type: ObjectId,
            ref: 'User'
        },
        images: [
            {
                type: ObjectId,
                ref: 'Image'
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Comment', CommentSchema);
