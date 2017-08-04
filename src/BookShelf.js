import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

	state = {
		books: {
			currentlyReading: [],
			wantToRead: [],
			read: [],
		}
	}
	componentDidMount() {
		BooksAPI.getAll().then(data => {
			const cr = data.filter(book => book.shelf === 'currentlyReading');
			const wr = data.filter(book => book.shelf === 'wantToRead');
			const r = data.filter(book => book.shelf === 'read');
			this.setState({books: {
				currentlyReading: cr,
				wantToRead: wr,
				read: r
			}});
		});
	}

	onMoveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(data => {
			console.log("Moving book");
			console.log(data);
			let books = {};

			for(let shelf in data) {
				console.log("Shelf: " + shelf);
				books[shelf] = [];

				if( data[shelf].length == 0 ) {
					continue;
				}

				data[shelf].map(id => {
					BooksAPI.get(id).then(book => {
						console.log('this is a book');
						console.log(book);
						books[shelf].push(book);
					});
				});


			}
			console.log("final Books");
			console.log(books);
			this.setState({books: books})

			// this.setState({books:data});
		});
	}
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<BooksList books={this.state.books.currentlyReading} moveBook={this.onMoveBook}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<BooksList books={this.state.books.wantToRead} moveBook={this.onMoveBook}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<BooksList books={this.state.books.read} moveBook={this.onMoveBook}/>
							</div>
						</div>
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