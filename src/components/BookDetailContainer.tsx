import React, { useEffect, useState } from 'react'
import BookDetail from './BookDetail'
import axios from 'axios'
import { useParams } from 'react-router'

const BookDetailContainer: React.FC = () => {
	const [book, setBook] = useState({})
	let { id } = useParams()

	useEffect(() => {
		const getBookDetail = async () => {
			const res = await axios.get(`http://localhost:8999/books/${id}`)
			setBook(res.data)
		}

		getBookDetail().then()
	}, [])
	return <BookDetail book={book} />
}

export default BookDetailContainer