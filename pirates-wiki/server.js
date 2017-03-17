//controllers for `/pirates` resource
var express = require('express');
var app = express();

var hbs = require('hbs');
app.set('view engine', 'hbs');

var piratesArray = require('./controllers/pirates_controller.js'
);
app.use('pirates', piratesArray);
// catch it with app use

app.listen(port 3000);




// var pirateController = require('./controllers/pirates.js');
//
//
//
//
// app.use("/pirates", pirateController);
//
//
// var bodyParser = require('body-parser');
//
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
