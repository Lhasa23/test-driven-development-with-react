import React from 'react'

const BookDetail: React.FC<{ book: any }> = ({ book }) => {
	// const overLength = book.description.length > 300

	return (<div data-test="book-detail">
		<h2 className="title">{book.name}</h2>
		<div className="description-wrapper">
			<p className="description">{book.description}</p>
		</div>
	</div>)
}

export default BookDetail
