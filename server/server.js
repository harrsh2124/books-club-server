const app = require('./app');

app.get('/', (req, res) => {
    return res.redirect('/status');
});

app.get('/status', (req, res) => {
    return res.json({
        message: 'Server is up and running!'
    });
});
