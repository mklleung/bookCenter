var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('z', { title: 'Departments Z' });
});

module.exports = router;
