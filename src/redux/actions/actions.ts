import axios from 'axios'
import types from '../types'

export const setKeyword = (keyword: string) => {
	return (dispatch: any) => {
		dispatch({ type: types.SET_SEARCH_KEYWORD, keyword })
	}
}

export const fetchBooks = () => {
	return (dispatch: any, getState: () => any) => {
		dispatch({ type: types.FETCH_BOOKS_PENDING })
		const state = getState()
		return axios.get(`http://localhost:8999/books?q=${state.keyword}`).then((res) => {
			dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data })
		}).catch((err) => {
			dispatch({ type: types.FETCH_BOOKS_FAILED, message: err.message })
		})
	}
}