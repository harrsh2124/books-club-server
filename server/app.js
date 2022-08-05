const app = require('express')();
require('dotenv').config();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

module.exports = app;
