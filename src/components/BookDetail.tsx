import React from 'react'

const BookDetail: React.FC<{ book: any }> = ({ book }) => {
	return (<div data-test="book-detail">
		<h2 className="title">{book.name}</h2>
		<h2 className="description">{book.description}</h2>
	</div>)
}

export default BookDetail
