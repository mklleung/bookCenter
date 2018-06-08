var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('y', { title: 'Departments Y' });
});

module.exports = router;
