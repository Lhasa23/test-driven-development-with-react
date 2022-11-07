import axios from 'axios'
import types from '../types'
import { AppDispatch } from '../store'

export const setKeyword = (keyword: string) => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: types.SET_SEARCH_KEYWORD, keyword })
	}
}

export const fetchBooks = () => {
	return async (dispatch: AppDispatch, getState: () => any) => {
		dispatch({ type: types.FETCH_PENDING })
		const state = getState()
		try {
			const res = await axios.get(`http://localhost:8999/books?q=${state.keyword || ''}`)
			dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data })
		} catch (err: any) {
			dispatch({ type: types.FETCH_FAILED, message: err.message })
		}
	}
}

export const fetchBookDetail = (id: string | number) => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: types.FETCH_PENDING })
		try {
			const res = await axios.get(`http://localhost:8999/books/${id}`)
			dispatch({ type: types.FETCH_BOOK_SUCCESS, detail: res.data })
		} catch (err: any) {
			dispatch({ type: types.FETCH_FAILED, message: err.message })
		}
	}
}
