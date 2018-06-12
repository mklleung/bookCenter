var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('departments', { title: 'Departments' });
});
router.get('/A', function(req, res, next) {
  res.render('a', { title: 'Departments A' });
});
router.get('/B', function(req, res, next) {
  res.render('b', { title: 'Departments B' });
});
router.get('/C', function(req, res, next) {
  res.render('c', { title: 'Departments C' });
});
router.get('/D', function(req, res, next) {
  res.render('d', { title: 'Departments D' });
});
router.get('/E', function(req, res, next) {
  res.render('e', { title: 'Departments E' });
});
router.get('/F', function(req, res, next) {
  res.render('f', { title: 'Departments F' });
});
router.get('/G', function(req, res, next) {
  res.render('g', { title: 'Departments G' });
});
router.get('/H', function(req, res, next) {
  res.render('h', { title: 'Departments H' });
});
router.get('/I', function(req, res, next) {
  res.render('i', { title: 'Departments I' });
});
router.get('/J', function(req, res, next) {
  res.render('j', { title: 'Departments J' });
});
router.get('/K', function(req, res, next) {
  res.render('k', { title: 'Departments K' });
});
router.get('/L', function(req, res, next) {
  res.render('l', { title: 'Departments L' });
});
router.get('/M', function(req, res, next) {
  res.render('m', { title: 'Departments M' });
});
router.get('/N', function(req, res, next) {
  res.render('n', { title: 'Departments N' });
});
router.get('/O', function(req, res, next) {
  res.render('o', { title: 'Departments O' });
});
router.get('/P', function(req, res, next) {
  res.render('p', { title: 'Departments P' });
});
router.get('/Q', function(req, res, next) {
  res.render('q', { title: 'Departments Q' });
});
router.get('/R', function(req, res, next) {
  res.render('r', { title: 'Departments R' });
});
router.get('/S', function(req, res, next) {
  res.render('s', { title: 'Departments S' });
});
router.get('/T', function(req, res, next) {
  res.render('t', { title: 'Departments T' });
});
router.get('/U', function(req, res, next) {
  res.render('u', { title: 'Departments U' });
});
router.get('/V', function(req, res, next) {
  res.render('v', { title: 'Departments V' });
});
router.get('/W', function(req, res, next) {
  res.render('w', { title: 'Departments W' });
});
router.get('/X', function(req, res, next) {
  res.render('x', { title: 'Departments X' });
});
router.get('/Y', function(req, res, next) {
  res.render('y', { title: 'Departments Y' });
});
router.get('/Z', function(req, res, next) {
  res.render('z', { title: 'Departments Z' });
});
module.exports = router;
