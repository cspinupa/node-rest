// Server configuration
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


var app = require('./app');

const swaggerOptions = {
    swaggerDefinition : {
        openapi: "3.0.0",
        info: {
            title : 'Subscriber API',
            version: "1.0.2",
            description: 'API exposing Subscriber details like name, subscribedTo and date',
            contact: {
                name: 'Chetan Sharma'
            },
            servers: [ {
                url: 'http://localhost:3300',
                description: 'Local development server'
            } ]
        }
    },
    // [./route/*.js]
    apis: ['app.js','/routes/*.js','./user/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

var port = process.env.PORT|| 3300 ;
var server = app.listen( port ,function() {
    console.log('\n \nServer started!')
    console.log('Express server listening on port:' +port+'\n');
});
