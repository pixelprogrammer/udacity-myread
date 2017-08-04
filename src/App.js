import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {

	render() {
		return (
			<div className="app">
				<Route path="/search" exact render={() => (
					<BookSearch/>
				)}/>
				<Route path="/" exact render={() => (
					<BookShelf/>
				)}/>
			</div>
		)
	}
}

export default BooksApp
