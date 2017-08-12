import React, {Component} from 'react'

class BooksList extends Component {

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
										<select value={typeof book.shelf != 'undefined' ? book.shelf : 'none'} onChange={(event) => {
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
								{typeof book.authors != 'undefined' && (
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

/**
 * <li>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
							<div className="book-shelf-changer">
								<select>
									<option value="none" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">Ender's Game</div>
						<div className="book-authors">Orson Scott Card</div>
					</div>
				</li>
 */