var express = require('express');
var router = express.Router();

/* Get users listing to show all users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Sign clients up...Make a .Get Signup Page

// Post page to register the users and
// Need to Save their information

module.exports = router;
