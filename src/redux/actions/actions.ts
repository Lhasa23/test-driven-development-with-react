import axios from 'axios'
import types from '../types'

export const fetchBooks = (keyword: string) => {
	return (dispatch: any, getState: () => any) => {
		dispatch({ type: types.FETCH_BOOKS_PENDING })
		const state = getState()
		return axios.get(`http://localhost:8999/books?q=${state.keyword || keyword}`).then((res) => {
			dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data })
		}).catch((err) => {
			dispatch({ type: types.FETCH_BOOKS_FAILED, message: err.message })
		})
	}
}