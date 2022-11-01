import React, { useEffect } from 'react'
import BookList from './BookList'
import SearchBox from '../searchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import bookListSelector from '../redux/selector'
import * as actions from '../redux/actions/actions'

const BookListContainer: React.FC = () => {
	const dispatch = useDispatch()

	const { books, loading, error } = useSelector(bookListSelector)

	useEffect(() => {
		dispatch(actions.fetchBooks())
	}, [])


	return (<>
			<SearchBox />
			<BookList books={books} loading={loading} error={error} />
		</>
	)
}

export default BookListContainer