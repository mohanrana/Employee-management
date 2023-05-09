const config = require('config');
const express = require('express');
const { startMongoDB } = require('./src/utils/mongo-db');
const routes = require('./src/routes');
const { ExceptionHandler } = require('./src/utils/exception-handler');

const app = express();

startMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(config.get('server.port'), function () {
    console.log(`App listening on port ${config.get('server.port')}`)
})


// Exception handler middleware
app.use(ExceptionHandler);
