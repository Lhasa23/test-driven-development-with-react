import types from '../types'

const reducer = (initState: any, action: any) => {
	switch (action.type) {
		case types.SET_SEARCH_KEYWORD:
			return { ...initState, keyword: action.keyword }
		case types.FETCH_PENDING:
			return { ...initState, loading: true }
		case types.FETCH_BOOKS_SUCCESS:
			return { ...initState, books: action.books, loading: false, error: false }
		case types.FETCH_BOOK_SUCCESS:
			return { ...initState, detail: action.detail, loading: false, error: false }
		case types.FETCH_FAILED:
			return { ...initState, message: action.message, loading: false, error: true }
		default:
			return initState
	}
}

export default reducer
