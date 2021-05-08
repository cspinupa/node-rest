// Application configuration

var express = require ('express');
var app = express();

var db = require('./db');

app.use(express.json())
/**
 * @swagger
 * /subscribers:
 *  get:
 *      description: Get all subscribers
 *      responses: 
 *          200: 
 *              description: success
 * 
 */
const subscribersRouters = require('./routes/subscribers')
app.use('/subscribers',subscribersRouters)


var UserController = require('./user/UserController');
app.use('/users',UserController);

/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all the books
 *      responses: 
 *          200: 
 *              description: success
 * 
 */
app.get('/books', (req, res) => {
    res.send([{
        id: 1,
        title: 'Harry Potter'
    }
    ])
})

module.exports = app;