/*var express = require('express');
var router = express.Router();

//GET home page.
router.get('/', function(req, res, next) {
  res.render('allBooks', { title: 'All Books' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const fs = require('fs');
const Quantity = require('../models/Quantity')
const BookName = require('../models/BookName')
const Courses = require('../models/Courses')
const CoverType = require('../models/CoverType')
const Condition = require('../models/Condition')
const LowestPrice = require('../models/LowestPrice')
const Seller = require('../models/Seller')
const Evidence = require('../models/Evidence')



console.log("inside router ...")
// Here is where we read the data from a file
let rawdata = fs.readFileSync('../database/data.json','utf8');
let database = JSON.parse(rawdata);
console.log("just read database!")
console.log(`Here are the squares ${database.squares.map((x)=>(x.toString()))}`)

//This variable only lasts as long as the router is not restarted
let counter = 0
console.log("loading skills router!!!")

//let squares = []

router.get('/addBooks', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  counter++
  console.dir(database)
  //console.dir(database.skills)
  res.render('addBooks',
      {info:'addBooks',
      quantity:database.quantity,
      bookname:database.bookname,
      courses:database.courses,
      covertype:database.covertype,
      condition:database.condition,
      lowestprice:database.lowestprice,
      seller:database.seller,
      evidence:database.evidence,
      counter:counter,
    })
});

router.post('/addBooks', function(req, res, next){
  counter++
  //console.log(req.body.skill)
  //console.log(req.body.student)
  //console.log(req.body.evidence)
  let e = new Evidence(req.body.quantity, req.body.bookname, req.body.courses, req.body.covertype, req.body.condition, req.body.lowestprice, req.body.seller)
  console.log('Just loaded ',e)
  database.evidence.push(e)
  // here is where we write the modified data back to the disk
  fs.writeFileSync('../database/data.json',JSON.stringify(database,null,' '));
  // and we send them back to the same page ...
  res.render('addBooks',
      {info:'addBooks',
      quantity:database.quantity,
      bookname:database.bookname,
      courses:database.courses,
      covertype:database.covertype,
      condition:database.condition,
      lowestprice:database.lowestprice,
      seller:database.seller,
      evidence:database.evidence,
      counter:counter
    })
})

router.get('/', function(req, res, next) {
  res.render('allBooks', { title: 'All Books' });
})

module.exports = router;*/

var express = require('express');
var router = express.Router();
const fs = require('fs');
const Quantity = require('../models/Quantity')
const BookName = require('../models/BookName')
const Courses = require('../models/Courses')
const CoverType = require('../models/CoverType')
const Condition = require('../models/Condition')
const LowestPrice = require('../models/LowestPrice')
const Seller = require('../models/Seller')
const AddBooks = require('../models/AddBooks')

console.log("inside router ...")
// Here is where we read the data from a file
let rawdata = fs.readFileSync('../database/data.json','utf8');
let database = JSON.parse(rawdata);
//console.log("just read database!")
//console.log(`Here are the squares ${database.squares.map((x)=>(x.toString()))}`)

//This variable only lasts as long as the router is not restarted
let counter = 0
//console.log("loading login router!!!")

router.get('/', function(req, res, next) {
  res.render('allBooks', { title: 'All Books' });
});

router.get('/addBooks', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  counter++
  //console.dir(database)
  //console.dir(database.skills)
  res.render('addBooks',
      {info:'Add Books',
      quantity:database.quantity,
      bookName:database.bookName,
      courses:database.courses,
      coverType:database.coverType,
      condition:database.condition,
      lowestPrice:database.lowestPrice,
      seller:database.seller,
      addBooks:database.addBooks,
      counter:counter,
    })
});

router.post('/addBooks', function(req, res, next){
  counter++
  //console.log(req.body.skill)
  //console.log(req.body.student)
  //console.log(req.body.evidence)
  let e = new AddBooks(req.body.quantity, req.body.bookName, req.body.courses, req.body.coverType, req.body.condition, req.body.lowestPrice, req.body.seller)
  console.log('Just loaded ',e)
  database.addBooks.push(e)
  // here is where we write the modified data back to the disk
  fs.writeFileSync('../database/data.json',JSON.stringify(database,null,' '));
  // and we send them back to the same page ...
  res.render('addBooks',
      {info:'Add Books',
      quantity:database.quantity,
      bookName:database.bookName,
      courses:database.courses,
      coverType:database.coverType,
      condition:database.condition,
      lowestPrice:database.lowestPrice,
      seller:database.seller,
      addBooks:database.addBooks,
      counter:counter
    })
})

module.exports = router;
