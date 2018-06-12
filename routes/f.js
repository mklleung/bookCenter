var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('f', { title: 'Departments F' });
});

module.exports = router;
