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

			// const cr = data.filter(book => book.shelf === 'currentlyReading');
			// const wr = data.filter(book => book.shelf === 'wantToRead');
			// const r = data.filter(book => book.shelf === 'read');
			this.setState({myBooks: data});
		});
	}

	// TODO: Update book in search results to new shelf category
	onMovedBook = (updatedState) => {
		console.log("Updating the books state");
		console.log(updatedState);
		this.setState(updatedState);
	}

	onSearch = (query) => {
		if( query === '' ) {
			return;
		}

		BooksAPI.search(query, 20).then(data => {
			// add my categories to the books so I can
			// add UI that shows whats on my shelves
			data.map(book => {
				
				for(let i=0; i < this.state.myBooks.length; i++) {
					
					if(this.state.myBooks[i].id == book.id) {
						book.shelf = this.state.myBooks[i].shelf;
					}
					
				}
				return book;
			})

			this.setState({searchedBooks: data})
			
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
