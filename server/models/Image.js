const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema(
    {
        url: {
            type: String,
            trim: true,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Image', ImageSchema);
