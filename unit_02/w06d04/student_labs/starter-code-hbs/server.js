/* packages */
 var path        = require('path');
 var logger      = require('morgan');
 var express     = require('express');
 var hbs         = require('hbs');
 var bodyParser  = require('body-parser');
 /* app settings*/
var MethodOverride = require('method-override');
 var app         = express();
 var port        = process.env.PORT || 3000;
 /* set up the application params*/
 var todosController =  require('./controllers/todos_controller.js');

 // log
 app.use( logger('dev'));

 /*Views*/
 app.set('view engine', 'hbs');
 app.use(express.static(__dirname + '/public'));

 app.use(bodyParser.urlencoded({
     extended: true
 }));

 app.use('/todos', todosController);

 /* HOME */
 app.get('/', function(req,res) {
   res.render('welcome');
 });

 // Start server
 app.listen(port, function() {
   console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
 });
  // views/layout.hbs
// var path = require('path');
// var logger = require('morgan');
// var express = require('express');
// var hbs = require('hbs');
// var bodyParser = require('body-parser');
// /* app settings*/
// var app = express();
// var port = process.env.PORT || 3000;
// /* set up the application params*/
//
// app.use (bodyParser.urlencoded({
//   extended: true
// }));
//
// var todosController = require('./controllers/todo.js');
// app.use('/todos', todosController);
//
// app.use( logger('dev'));
//
// /*Views*/
// app.set('view engine', 'hbs');
//
// /* HOME */
// app.get('/', function(req,res) {
//   res.send('This is our home page');
// });
//
// app.listen(port, function() {
//   console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
// });
/* INDEX TODOS */
// app.get('/todos', function(req,res) {
//   var seededTodos = [
//     {
//       description: "get beer",
//       urgent: true
//     }, {
//       description: "dry cleaning",
//       urgent: false
//     }
//     {
//       description: "groceries",
//       urgent: true
//     }
//   ];
//
//   res.render('todos/index', {
//     todos: seededTodos
//   });
// });

// Start server
