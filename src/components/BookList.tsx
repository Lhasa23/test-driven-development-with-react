import React from 'react'

const BookList: React.FC<{ books: any[] }> = ({ books }) => {
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
