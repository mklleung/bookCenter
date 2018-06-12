var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('v', { title: 'Departments V' });
});

module.exports = router;
