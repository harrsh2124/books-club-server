const env = {
    app: {
        PORT: process.env.PORT || 8000,
        CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
    },
    database: {
        MONGODB_URI: process.env.MONGODB_URI || ''
    }
};

module.exports = env;
