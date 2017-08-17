import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksComponent from './BooksComponent'
import BooksList from './BooksList'

let query = '';

class BookSearch extends BooksComponent {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onMoveBook: PropTypes.func.isRequired,
		onSearch: PropTypes.func.isRequired,
		labels: PropTypes.array.isRequired,
	}

	onSearch = (event) => {

		query = event.currentTarget.value;
		this.props.onSearch(query);
		
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
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