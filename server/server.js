const app = require('./app');
const routes = require('./routes/routes');
const connectDB = require('./utils/db');
const env = require('./utils/env');
const logger = require('./utils/logger');
const Response = require('./utils/response');

const PORT = env.app.PORT;

connectDB().then(() => {
    app.listen(PORT, () => logger.info(`Server is running on port ${PORT}...`));

    app.get('/', (req, res) => {
        return res.redirect('/status');
    });

    app.get('/status', (req, res) => {
        return Response(req, res, 200, 'Server is up and running!');
    });

    app.use('/api/v1', routes);
});
