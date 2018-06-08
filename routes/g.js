var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('g', { title: 'Departments G' });
});

module.exports = router;
