const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const BookSchema = mongoose.Schema(
    {
        is_hidden: {
            type: Boolean,
            default: false
        },
        is_borrowed: {
            type: Boolean,
            default: false
        },
        rent: {
            type: Number,
            required: true
        },
        currently_borrowed_by: {
            type: ObjectId,
            ref: 'User'
        },
        details: {
            type: ObjectId,
            ref: 'BookDetails'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Book', BookSchema);
