import React from 'react'
import BookDetail from './BookDetail'

import { useParams } from 'react-router'
import { useRemoteService } from '../hooks/useRemoteService'

const BookDetailContainer: React.FC = () => {
	let { id } = useParams()
	const { resData } = useRemoteService(`/${id}`, {})
	console.log(resData)

	return <BookDetail book={resData} />
}

export default BookDetailContainer