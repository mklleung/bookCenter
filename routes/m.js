var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('m', { title: 'Departments M' });
});

module.exports = router;
