const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const logger = require('./logger');

const SendMail = async (email, subject, message, template) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'margaretta.boehm92@ethereal.email',
            pass: 'Xz5HJmEFAsVH1z8fh5'
        }
    });

    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./server/templates/'),
            defaultLayout: false
        },
        viewPath: path.resolve('./server/templates/'),
        extName: '.hbs'
    };
    transporter.use('compile', hbs(handlebarOptions));

    transporter
        .sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
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
