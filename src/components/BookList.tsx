import React from 'react'

const BookList: React.FC<{ books: any[], loading: boolean, error: boolean }> = ({ books, loading, error }) => {
	if (loading) {
		return <div><p>Loading...</p></div>
	}

	if (error) {
		return <div><p>Error...</p></div>
	}

	return (<div data-test="book-list">
		{
			books.map(book => (
				<div className="book-item" key={book.id}>
					<h2 className="title">{book.name}</h2>
				</div>
			))
		}
	</div>)
}

export default BookList
