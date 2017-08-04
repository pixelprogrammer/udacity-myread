import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
	state = {
		books: [],
	}

	// componentDidMount() {
	// 	BooksAPI.search("", 20).then(data => {
	// 		console.log(data);
	// 		// this.setState({books: data});
	// 	});
	// }

	onSearch = (event) => {

		console.log(event.currentTarget.value);
		const query = event.currentTarget.value;

		BooksAPI.search(query, 20).then(data => {
			console.log(data);
			this.setState({books:data})
		});
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
						<input type="text" placeholder="Search by title or author" onInput={this.onSearch}/>
						
					</div>
				</div>
				<div className="search-books-results">
					<BooksList books={this.state.books}/>
				</div>
			</div>
		)
	}	
}

export default BookSearch