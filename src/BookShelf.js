import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksComponent from './BooksComponent'
import BooksList from './BooksList'
// import * as BooksAPI from './BooksAPI'

class BookShelf extends BooksComponent {
	
	static propTypes = {
		books: PropTypes.array.isRequired,
		onMoveBook: PropTypes.func.isRequired,
		labels: PropTypes.array.isRequired,
	}

	// onMoveBook = (book, shelf) => {
	// 	BooksAPI.update(book, shelf).then(data => {
	// 		console.log("Moving book");
	// 		console.log(data);

	// 		// check if found
	// 		const index = data[shelf].findIndex(id => {
	// 			return id === book.id;
	// 		});

	// 		if( index >= 0 || shelf === "none") { // a successful transfer
	// 			this.props.onMoveBook(book, shelf);
	// 			return;
	// 		}

	// 		// maybe some error handling here in case the book did not move


	// 		// BooksAPI.getAll().then(data => {

	// 		// 	this.props.onMoveBook({myBooks: data})
	// 		// })

	// 		// this.setState({books:data});
	// 	});
	// }
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