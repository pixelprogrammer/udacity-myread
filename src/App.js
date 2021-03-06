import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import './App.css'

const shelfLabels = [
	{label: "Currently Reading", slug: "currentlyReading"},
	{label: "Want To Read", slug: "wantToRead"},
	{label: "Read", slug: "read"},

];

class BooksApp extends React.Component {

	state = {
		searchedBooks: [],
		myBooks: [],
	}

	componentDidMount() {
		BooksAPI.getAll().then(data=> {
			this.setState({myBooks: data});
		});
	}

	onMovedBook = (book, shelf) => {
		// update book in both myBooks and searchedBooks

		let myBooks = this.state.myBooks.filter(b => b.id !== book.id)
		book.shelf = shelf;

		myBooks.push(book);

		let searchedBooks = this.state.searchedBooks;


		this.setState({
			myBooks: myBooks,
			searchedBooks: searchedBooks
		});

	}

	onSearch = (query) => {

		if( query === '' ) {
			return;
		}

		BooksAPI.search(query, 20).then(data => {

			let books = [];

			if( "error" in data ) {
				this.setState({searchedBooks: books});
				return;
			}
			// add my categories to the books so I can
			// add UI that shows whats on my shelves
			books = data.map(book => {
				
				for(let i=0; i < this.state.myBooks.length; i++) {
					
					if(this.state.myBooks[i].id === book.id) {
						book.shelf = this.state.myBooks[i].shelf;
					}
					
				}
				return book;
			})

			this.setState({searchedBooks: books})
			
		});
	}
	render() {
		
		return (
			<div className="app">
				<Route path="/search" exact render={() => (
					<BookSearch labels={shelfLabels} books={this.state.searchedBooks} onSearch={this.onSearch} onMoveBook={this.onMovedBook}/>
				)}/>
				<Route path="/" exact render={() => (
					<BookShelf labels={shelfLabels} books={this.state.myBooks} onMoveBook={this.onMovedBook}/>
				)}/>
			</div>
		)
	}
}

export default BooksApp
