var express = require('express');
var router  = express.Router();
var data = require('./../models/data.js');

// any http VERB method (get, post, delete, etc) they all take two parameters
// first parameter is the url path, second is the function(req, res)
router.get('/', function(req, res) {
  // res.render allows us to pass in a whole html template instead of typing all of it out manually
  // res.render takes two parameters as well
  // first parameter is the 'view', which is just the handlebars file
  // second parameter is the data we're passing into the view as an object

  res.render('index.hbs', {
    // here the key is 'todontsList'
    // here the value is the entire list of todonts 'data.seededToDonts'
    // we can call the key whatever we want as long as in the hbs file inside the {{}} we use the same key
    todontsList: data.seededToDonts
  });
});

// we have to put this above '/:id' route because,
// '/:id' is a wildcard, and anything you pass into it will be read as the req.params.id
// so if you put it below it, it'll skip the /new route
router.get('/new', function(req, res) {
  // great job Dee
  // normally, we would need a second parameter which would be data we're injecting into the view
  // but here we're just making a form so that they can add new todonts
  res.render('new.hbs');
});

// now we make the 'route' such that, we can actually use the data that the user enters
// we have to use the post method!
// post is still an HTTP VERB, so it takes the same parameters as get, put, etc
router.post('/new', function(req, res) {
  // how do we get the info from the form?
  // recall: req=client, res=server, the CLIENT is filling out the form
  // so we're going to use some form of req.blah
  // whatever they put in the form will come out on this page as req.body.(whatever we decide the label for and input name values to be)
  var newTodont = {
    description: req.body.description,
    urgent: req.body.urgent
  }
  // works!
  console.log(newTodont.description);
  console.log(newTodont.urgent);
  // now we have to take this new todont that was created via the form
  // and put it into our data file
  // our data file is already 'required' on this page
  // recall: data.seededToDonts is a array containing all of our todonts
  // lets push the new todont into the array
  data.seededToDonts.push(newTodont);
  // now, we've updated the data (our model in the MVC)
  // now when we redirect to our 'index view', it will show all the contents of our model (data.seededToDonts which is the array containing all todonts)
  // now index page should contain the new todont
  res.redirect('/todonts');
});


// EDIT ROUTE
router.get('/:id/edit', function(req, res) {
  res.render('edit.hbs', {
    // again, we're passing a key arbitrarily named, as long as it's referenced verbatimm
    // in the edit.hbs file
    // the value associated with the key will be whatever todont the user wants to edit
    // we get that particular todont by using the index value, which is 'req.params.id'
    todont: data.seededToDonts[req.params.id]
  });
});



// colon is a wild card, you can pass in anything before the colon and it will pull up this page
// we give it a name so we can access it later with req.params.id
// e.g. if I type in localhost:3000/todonts/4
// req.params.id would equal 4
router.get('/:id', function(req, res) {
  // res.send('test page beep boop');
  // RENDER TAKES TWO PARAMETERS, first is a view
  // second is the data were injecting into the view as an OBJECT
  res.render('show.hbs', {
    // we can name the 'key' whatever we want as long as its referenced with the same 'key' in the hbs file
    // value here should be whatever todont inside the list the user wants as per the 'id'
    todont: data.seededToDonts[req.params.id]
  });
});





module.exports = router;
