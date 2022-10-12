import React from 'react'
import BookList from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'

const BookListContainer: React.FC = () => {
	const { books, loading, error } = useRemoteService()
	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error...</div>
	}

	return <BookList books={books} />
}

export default BookListContainer