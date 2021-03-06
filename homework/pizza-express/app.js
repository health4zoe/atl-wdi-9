//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
// assigning 3000 as our port
var port = 3000;
var hbs =require('hbs');


app.get('/', function(req, res) {
  res.send('Welcome to Pizza Express!');
});

app.get('/topping/:type', function(req, res, next) {

    res.send('Welcome to Pizza Express!');
});


   res.send(`$(req.params.type)Pizza Express, Good choice`);
});

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});


app.set("view engine", "hbs");
app.set('views', './views');

app.get('/order/:amount/:size', function(req, res, next)
// number three

res.send(` order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute! `);
});
// console.log('hello-express is listening on port 3000');
