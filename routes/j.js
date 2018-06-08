var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('j', { title: 'Departments J' });
});

module.exports = router;
