'use strict';
const AddBook = require( '../models/addbook' );
console.log("loading the addBook Controller")


// this displays all of the skills
exports.getAllBooks = ( req, res ) => {
  console.log('in getAllBooks')
  AddBook.find( {} )
    .exec()
    .then( ( addBooks ) => {
      res.render( 'allBooks', {
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
