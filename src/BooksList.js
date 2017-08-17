import React, {Component} from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

class BooksList extends Component {
	static id = ''

	static propTypes = {
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired,
		labels: PropTypes.array.isRequired,
	}

	componentDidMount() {
		this.id = shortid.generate();
	}

	render() {
		return (
			<ol className="books-grid">
				{ this.props.books.length > 0 && (

					this.props.books.map((book) => (
						<li key={this.id + '-' + book.id}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
									<div className="book-shelf-changer">
										<select value={typeof book.shelf !== 'undefined' ? book.shelf : 'none'} onChange={(event) => {
											const shelf = event.currentTarget.value;
											this.props.moveBook(book, shelf);
										}}>
											<option value="none" disabled>Move to...</option>
											{this.props.labels.map(shelf => (
												<option key={shortid.generate()} value={shelf.slug}>{shelf.label}</option>
											))}
											<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								{typeof book.authors !== 'undefined' && (
									<div className="book-authors">{book.authors.map((author) => (
										<div key={shortid.generate()}>{author}</div>
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