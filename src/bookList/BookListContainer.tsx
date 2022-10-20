import React from 'react'
import BookList from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

const BookListContainer: React.FC = () => {
	const { resData, loading, error } = useRemoteService('', [])

	return <BookList books={resData} loading={loading} error={error} />
}

export default BookListContainer