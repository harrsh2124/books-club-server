const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const logger = require('./logger');
const env = require('./env');

const SendMail = async (email, subject, message, template) => {
    const transporter = nodemailer.createTransport({
        host: env.email.HOST,
        port: env.email.PORT,
        auth: {
            user: env.email.USER_ID,
            pass: env.email.PASSWORD
        },
        secure: false,
        requireTLS: true
        // logger: true
    });

    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve(`.${env.email.DIR}`),
            defaultLayout: false
        },
        viewPath: path.resolve(`.${env.email.DIR}`),
        extName: '.hbs'
    };
    transporter.use('compile', hbs(handlebarOptions));

    transporter
        .sendMail({
            from: `"Harrsh Patel" <${env.email.USER_ID}>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            template, // Name of the template file
            context: message
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            logger.error(error.message);
        });
};

module.exports = SendMail;
