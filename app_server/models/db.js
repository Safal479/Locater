var mongoose = require ('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

// monitor mongoose connections
mongoose.connection.on('connected', function() {
    console.log('Mongoose Connected to '+ dbURI);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose Connecttion error '+ err);
});

//closing mongoose connection
var gracefulShutDown = function(msg, callback) {
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through '+msg);
    });
};

//sigint emulation for windows
var readLine = require('readline');
if (process.platform === 'win32') {
    var rl = readLine.createInterface({
        input: stdin,
        output: stdout
    });
    rl.on('SIGINT', function () {
        process.emit('SIGINT');
    });
}

//event listeners
process.once('SIGUSR2', function () {
    gracefulShutDown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    gracefulShutDown('app termination', function () {
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    gracefulShutDown('heroku termination', function () {
        process.exit(0);
    });
});

require('./locations');