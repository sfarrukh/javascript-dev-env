// var express = require('express');    // ES5
import express from 'express';  // ES6

// var path = require('path');  // ES5
import path from 'path';        // ES6

// var open = require('open');  // ES5
import open from 'open';        // ES6

import webpack from 'webpack';
import config from '../webpack.config.dev';
// var port = 3000;              // ES5
const port = 3000;               // ES6

// var app = express(); // 'express' instance // ES5
const app = express();            // ES6

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

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