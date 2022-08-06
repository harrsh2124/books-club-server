const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const BookDetailsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        cover_photo: {
            type: ObjectId,
            ref: 'Image'
        },
        author: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        genre: {
            type: String,
            trim: true
        },
        open_to_sale: {
            type: Boolean,
            default: false
        },
        price: {
            type: Number
        },
        comments: [
            {
                type: ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('BookDetails', BookDetailsSchema);
