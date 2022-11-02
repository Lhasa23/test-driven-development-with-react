import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BookList from './BookList'
import SearchBox from '../searchBox/SearchBox'
import * as actions from '../redux/actions/actions'
import bookListSelector from '../redux/selector'

const BookListContainer: React.FC = () => {
	const dispatch = useDispatch()

	const { books, loading, error } = useSelector(bookListSelector)

	useEffect(() => {
		dispatch(actions.fetchBooks())
	}, [])

	const searchByKeyword = () => {
		dispatch(actions.fetchBooks())
	}

	return (<>
			<SearchBox onSearch={searchByKeyword} />
			<BookList books={books} loading={loading} error={error} />
		</>
	)
}

export default BookListContainer