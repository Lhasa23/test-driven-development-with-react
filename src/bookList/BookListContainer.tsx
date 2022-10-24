import React from 'react'
import BookList from './BookList'
import { useRemoteService } from '../hooks/useRemoteService'
import SearchBox from '../searchBox/SearchBox'

const BookListContainer: React.FC = () => {
	const { resData, loading, error, setUrl } = useRemoteService('', [])

	return (<>
			<SearchBox onSearch={setUrl} />
			<BookList books={resData} loading={loading} error={error} />
		</>
	)
}

export default BookListContainer