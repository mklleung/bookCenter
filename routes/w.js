var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('w', { title: 'Departments W' });
});

module.exports = router;
