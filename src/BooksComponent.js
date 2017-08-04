import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class BooksComponent extends Component {
	
	state = {
		books: []
	}

	onMoveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(data => {
			console.log("Moving book");
			console.log(data);
			// this.setState({:data});
		});
	}
}

export default BooksComponent