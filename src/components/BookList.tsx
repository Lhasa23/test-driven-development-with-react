import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BookList = () => {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getBooks = async () => {
			try {
				setLoading(true)
				setError(false)
				const res = await axios.get('http://localhost:8999/books')
				setLoading(false)
				setBooks(res.data)
			} catch (err) {
				setError(true)
				alert(err)
			}
		}

		getBooks().then()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error...</div>
	}

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
