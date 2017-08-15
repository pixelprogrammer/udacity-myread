import {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class BooksComponent extends Component {
	
	onMoveBook = (book, shelf) => {
		BooksAPI.update(book, shelf).then(data => {
			console.log("Moving book");
			console.log(data);
			let index = -1;

			// check if found
			if( shelf in data ) {
				index = data[shelf].findIndex(id => {
					return id === book.id;
				});
			}

			if( index >= 0 || shelf === "none") { // a successful transfer
				this.props.onMoveBook(book, shelf);
				return;
			}

			// maybe some error handling here in case the book did not move

		});
	}
}

export default BooksComponent