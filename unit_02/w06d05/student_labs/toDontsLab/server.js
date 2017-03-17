var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
  extended: true
}));

// anytime we see the '_method' we're using the methodOverride function
app.use(methodOverride('_method'));

var todontsController = require('./controllers/todonts.controller.js');
app.use('/todonts', todontsController);










var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
