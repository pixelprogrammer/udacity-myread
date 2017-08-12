import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

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
			
			BooksAPI.getAll().then(data => {

				this.props.onMoveBook({myBooks: data})
			})

			// this.setState({books:data});
		});
	}
	render() {
		console.log('Book Shelf rendered');
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{this.props.labels.map(shelf => (


							<div key={"shelf-" + shelf.slug} className="bookshelf">
								<h2 className="bookshelf-title">{shelf.label}</h2>
								<div className="bookshelf-books">
									<BooksList books={this.props.books.filter(book => book.shelf === shelf.slug)} moveBook={this.onMoveBook} labels={this.props.labels}/>
								</div>
							</div>
						))}
						
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default BookShelf