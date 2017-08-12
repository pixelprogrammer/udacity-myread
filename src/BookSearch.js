import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

let query = '';

class BookSearch extends Component {

	onSearch = (event) => {

		console.log(event.currentTarget.value);
		query = event.currentTarget.value;

		console.log(this.props);

		this.props.onSearch(query);
		
	}

	onMoveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(data => {
			console.log('searched books moved');
			// let newBooks = this.props.searchedBooks.filter(book => )
			return BooksAPI.search(query, 20);
		}).then(data => {
			this.props.onMoveBook({searchedBooks: data})
		})
	}
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