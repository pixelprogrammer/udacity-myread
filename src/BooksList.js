import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BooksList extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired,
		labels: PropTypes.array.isRequired,
	}
	render() {

		return (
			<ol className="books-grid">
				{ this.props.books.length > 0 && (

					this.props.books.map((book) => (
						<li key={book.id}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
									<div className="book-shelf-changer">
										<select value={typeof book.shelf !== 'undefined' ? book.shelf : 'none'} onChange={(event) => {
											const shelf = event.currentTarget.value;
											this.props.moveBook(book, shelf);
										}}>
											<option value="none" disabled>Move to...</option>
											{this.props.labels.map(shelf => (

												<option key={shelf.slug} value={shelf.slug}>{shelf.label}</option>
											))}
											<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								{typeof book.authors !== 'undefined' && (
									<div className="book-authors">{book.authors.map((author) => (
										<div key={book.id + "-" + author}>{author}</div>
										)
									)}</div>
								)}
							</div>
						</li>
					))
					
				)}
			</ol>

		)
	}
}

export default BooksList