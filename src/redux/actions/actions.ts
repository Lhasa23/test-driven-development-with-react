import axios from 'axios'
import types from '../types'

export const setSearchTerm = (keyword: string) => {
	return {
		type: types.SET_SEARCH_KEYWORD,
		keyword
	}
}
export const fetchBooks = (keyword: string) => {
	return (dispatch: any) => {
		dispatch({ type: types.FETCH_BOOKS_PENDING })
		return axios.get(`http://localhost:8999/books?q=${keyword}`).then((res) => {
			dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data })
		}).catch((err) => {
			dispatch({ type: types.FETCH_BOOKS_FAILED, message: err.message })
		})
	}
}