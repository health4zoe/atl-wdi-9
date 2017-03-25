var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var hbs = require('hbs')

var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

// ADD THE NAME OF YOUR DATABASE
// mongoose.connect('mongodb://localhost/<YourDatabaseNameHere>');

app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/users', usersController);
app.use('/sessions', sessionsController);

app.listen(4000);
