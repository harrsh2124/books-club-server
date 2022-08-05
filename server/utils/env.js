const env = {
    app: {
        PORT: process.env.PORT || 8000,
        CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
    },
    database: {
        MONGODB_URI: process.env.MONGODB_URI || ''
    },
    email: {
        HOST: process.env.EMAIL_HOST || '',
        PORT: process.env.EMAIL_PORT || '',
        USER_ID: process.env.EMAIL_USER_ID || '',
        PASSWORD: process.env.EMAIL_PASSWORD || '',
        DIR: process.env.EMAIL_DIR || ''
    }
};

module.exports = env;
