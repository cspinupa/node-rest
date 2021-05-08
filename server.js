// Server configuration
var app = require('./app');

var port = process.env.PORT|| 3300 ;
var server = app.listen( port ,function() {
    console.log('\n \nServer started!')
    console.log('Express server listening on port:' +port+'\n');
});
