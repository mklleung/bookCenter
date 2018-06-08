var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('h', { title: 'Departments H' });
});

module.exports = router;
