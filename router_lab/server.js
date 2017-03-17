var express = require('express'); // Loading the express module on our server
var hbs = require('hbs'); // loads handlebars
var app = express(); // Create a new instance of express on our server

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
       res.send('Input a File Path');

});

var mathController = require(__dirname + '/controllers/math_controllers.js');
app.use("/math", mathController);

var greetingController = require(__dirname + '/controllers/greeting_controllers.js');
app.use("/greeting", greetingController);

app.listen(3000);
