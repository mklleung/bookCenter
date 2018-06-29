'use strict';
//const AddBook = require( '../models/AddBook' );
console.log("loading the addBook Controller")


// this displays all of the skills
exports.renderNotifications = ( req, res ) => {
  res.render('notifications')
};


exports.addCart = ( req, res ) => {
  console.log("in addCart!")
  console.dir(req)
  let newBook = new Cart( {
    quantity: req.body.quantity,
    bookName: req.body.bookName,
    courses: req.body.courses,
    coverType: req.body.coverType,
    condition: req.body.condition,
    lowestPrice: req.body.lowestPrice,
    seller: req.body.seller,
    buyer: req.body.buyer
  } )

  console.log("Cart = "+cart)

  Cart.save()
    .then( () => {
      res.redirect( '/notifications' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
