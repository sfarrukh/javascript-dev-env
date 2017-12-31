var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); // 'express' instance

// Tell express which routes to handle
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Tell express to listen to port defined above
app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});