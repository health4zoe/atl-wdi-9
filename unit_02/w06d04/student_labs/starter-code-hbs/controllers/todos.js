var express = require('express');
var router = express.Router();
var data = require('../data.js');

router.get('/', function(req, res) {
res.render ('todos/index', {
todos: data.seededTodos
});
});

// Create ToDo
 router.post('/', function(req, res){
    var newTodo = {
         description: req.body.description,
         urgent: req.body.urgent
     };

     console.log(newTodo);
     data.seededTodos.push(newTodo);
     res.redirect('/todos');
     // res.send("Create a new todo is working!");
 });


router.get('/new', function(req,res) {
  res.render('todos/new');
});

outer.get('/:id', function(req,res) {
    var todo = data.seededTodos[req.params.id];

    res.render('todos/show', {
        todo: todo
    });
});

module.exports = router;

//     todo: {
//       description:
//     data.seededTodos[req.params.id].description,
//           urgent:
//     data.seededTodos[req.params.id].urgent,
//           id:req.params.id
//         }
//   });
// });
// //   var todo =
//
//   router.get('/new', function(req, res) {
//   res.render('todos/new')
// });
// });





// router.get('/', function(req, res) {
// res.render ('todos/index', {
// todos: data.seededTodos
// });
// });

// require('./controllers/todo.js');
// }
// description: "",
// urgent: true
//
// });
//
// description: "eat",
// urgent: true
// {
// ];
//
//
//
// res.render('todos/index', {
//   todos: seededTodos
// });
// // });
//
// module.exports = router;
