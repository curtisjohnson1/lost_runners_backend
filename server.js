if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const PORT = config.PORT[process.env.NODE_ENV];
const apiRoutes = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}...`)
});