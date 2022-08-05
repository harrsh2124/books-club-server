const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./utils/logger');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(helmet());
app.use(cors());

const devLog = ':method :url :status - :response-time ms';
app.use(
    morgan(process.env.NODE_ENV === 'production' ? 'combined' : devLog, {
        stream: logger.stream
    })
);

module.exports = app;
