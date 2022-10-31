import types from '../types'

const reducer = (initState: any, action: any) => {
	switch (action.type) {
		case types.FETCH_BOOKS_PENDING:
			return { ...initState, loading: true }
		case types.FETCH_BOOKS_SUCCESS:
			return { ...initState, books: action.books }
	}
}

export default reducer
