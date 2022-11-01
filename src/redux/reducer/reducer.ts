import types from '../types'

const reducer = (initState: any, action: any) => {
	switch (action.type) {
		case types.SET_SEARCH_KEYWORD:
			return { ...initState, keyword: action.keyword }
		case types.FETCH_BOOKS_PENDING:
			return { ...initState, loading: true }
		case types.FETCH_BOOKS_SUCCESS:
			return { ...initState, books: action.books }
		case types.FETCH_BOOKS_FAILED:
			return { ...initState, message: action.message }
	}
}

export default reducer
