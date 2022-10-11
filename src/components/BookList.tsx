import React, { useState } from 'react'

const BookList = () => {
	const [books, setBooks] = useState([{ name: 'Refactoring' }, { name: 'Domain-driven design' }])
	return (<div data-test="book-list">
		{
			books.map(book => (
				<div className="book-item">
					<h2 className="title">{book.name}</h2>
				</div>
			))
		}
	</div>)
}

export default BookList
