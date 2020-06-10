var time = require('time');

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Bogota");
    callback(null, {
        statusCode: '200',
        body: 'La hora exacta en Colombia es: ' + currentTime.toString(),
    });
};