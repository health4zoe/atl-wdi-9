var express = require("express");
// asking express for a new router
var router = express.Router();
var pirates = require('../models/pirates.js');

// For server js not sure
router.get('/', function (req, res) {
  res.render('index', pirates);
  pirates: piratesArray
});
});


//all routes for /pirate
// router.get(.....)
// router.post (......)

// throw
module.exports = router;


// {
//   res.send ('');
// });
