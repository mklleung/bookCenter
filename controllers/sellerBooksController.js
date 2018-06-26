'use strict';
const AddBook = require( '../models/AddBook' );
console.log("loading the addBook Controller")


// this displays all of the skills
exports.getAllBooks = ( req, res ) => {
  console.log('in getAllBooks')
  AddBook.find( {} )
    .exec()
    .then( ( addBooks ) => {
      res.render( 'profile', {
        addBooks: addBooks
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'AddBook promise complete' );
    } );
};
