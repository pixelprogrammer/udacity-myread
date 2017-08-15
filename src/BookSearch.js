import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksComponent from './BooksComponent'
import BooksList from './BooksList'
// import * as BooksAPI from './BooksAPI'

let query = '';

class BookSearch extends BooksComponent {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onMoveBook: PropTypes.func.isRequired,
		onSearch: PropTypes.func.isRequired,
	}

	onSearch = (event) => {

		query = event.currentTarget.value;
		this.props.onSearch(query);
		
	}

	// onMoveBook = (book, shelf) => {
	// 	BooksAPI.update(book, shelf).then(data => {
	// 		console.log('searched books moved');
	// 		console.log(data);

	// 		// let newBooks = this.props.books.map(b => {
				
	// 		// 	if(b.id === book.id) {
	// 		// 		b.shelf = shelf;
	// 		// 	}

	// 		// 	return b;
	// 		// });
	// 		// this.props.onMoveBook({searchedBooks: newBooks});


	// 		const index = data[shelf].findIndex(id => {
	// 			return id === book.id;
	// 		});

	// 		if( index >= 0 ) {
	// 			this.props.onMoveBook(book, shelf);
	// 			return;
	// 		}

	// 		// return BooksAPI.search(query, 20);
	// 	});
	// 	// 	.then(data => {
	// 	// 	if( typeof data === 'Array' && data.length > 0 ) {

	// 	// 	}
	// 	// 	this.props.onMoveBook({searchedBooks: data})
	// 	// })
	// }
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/* 
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
							
							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={this.props.query} onInput={this.onSearch}/>
						
					</div>
				</div>
				<div className="search-books-results">
					<BooksList books={this.props.books} moveBook={this.onMoveBook} labels={this.props.labels} />
				</div>
			</div>
		)
	}	
}

export default BookSearch