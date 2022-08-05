const mongoose = require('mongoose');
const env = require('./env');
const logger = require('./logger');

const connectDB = async () => {
    try {
        await mongoose
            .connect(env.database.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                logger.info('MongoDB connected...');
            });
    } catch (error) {
        logger.error(`${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
