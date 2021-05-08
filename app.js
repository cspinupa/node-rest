// Application configuration

var express = require ('express');
var app = express();

var db = require('./db');

app.use(express.json())
const subscribersRouters = require('./routes/subscribers')
app.use('/subscribers',subscribersRouters)

var UserController = require('./user/UserController');
app.use('/users',UserController);

module.exports = app;