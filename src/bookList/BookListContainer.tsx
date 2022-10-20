import React from 'react'
import BookList from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

const BookListContainer: React.FC = () => {
	const { books, loading, error } = useRemoteService()

	return <BookList books={books} loading={loading} error={error} />
}

export default BookListContainer