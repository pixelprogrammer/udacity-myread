import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class BooksComponent extends Component {
	
	onMoveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(data => {
			console.log("Moving book");
			console.log(data);
			let books = {};

			// for(let shelf in data) {
			// 	console.log("Shelf: " + shelf);
			// 	books[shelf] = [];

			// 	if( data[shelf].length == 0 ) {
			// 		continue;
			// 	}

			// 	// data[shelf].map(id => {
			// 	// 	BooksAPI.get(id).then(book => {
			// 	// 		console.log('this is a book');
			// 	// 		console.log(book);
			// 	// 		books[shelf].push(book);
			// 	// 	});
			// 	// });


			// }
			
			// TODO: filter the books and then 
			BooksAPI.getAll().then(data => {

				this.props.onMoveBook({myBooks: data})
			})

		});
	}
}

export default BooksComponent