var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
//Tells node to start a new server and use app as the boiler plate.

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
    console.log('Server started!');
});
