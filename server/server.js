const app = require('./app');
const connectDB = require('./utils/db');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, () => logger.info(`Server is running on port ${PORT}...`));

    app.get('/', (req, res) => {
        return res.redirect('/status');
    });

    app.get('/status', (req, res) => {
        return res.status(200).json({
            status: true,
            message: 'Server is up and running!'
        });
    });
});