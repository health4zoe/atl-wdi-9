var express = require("express");
var router = express.Router();

router.get('/',function(req, res) {
  res.send('input numbers');
});

router.get('/:operator', function(req, res) {
    console.log(req.params);
    console.log(req.route);
    console.log(req.query);
  if (req.params.operator == 'add') {
        var total = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send(`${req.query.num1} + ${req.query.num2} = ${total}`);
  }
  else if (req.params.operator == 'subtract') {
        var total = parseInt(req.query.num1) - parseInt(req.query.num2);
        res.send(`${req.query.num1} - ${req.query.num2} = ${total}`);
  }
  else if (req.params.operator == 'divide') {
        var total = parseInt(req.query.num1) / parseInt(req.query.num2);
        res.send(`${req.query.num1} / ${req.query.num2} = ${total}`);
  }
  else if (req.params.operator == 'multiply') {
        var total = parseInt(req.query.num1) * parseInt(req.query.num2);
        res.send(`${req.query.num1} * ${req.query.num2} = ${total}`);
  }
  else {
    res.send(`Please pick a math operator. Add, subtract, divide, multiply`)
  }
 });

 module.exports = router;
