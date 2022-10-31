import reducer from './reducer'
import { describe, it, expect } from 'vitest'
import types from '../types'

describe('Books Store Reducer', () => {
	it('should update loading status', () => {
		const initState = { loading: false }
		const action = { type: types.FETCH_BOOKS_PENDING }

		const state = reducer(initState, action)
		expect(state.loading).toBeTruthy()
	})

	it('should add books list state success', () => {
		const books = [
			{ id: 1, name: 'Refactoring' },
			{ id: 2, name: 'Domain-driven design' }
		]
		const action = {
			type: types.FETCH_BOOKS_SUCCESS,
			books
		}

		const state = reducer({ books: [] }, action)
		expect(state.books).toEqual(books)
	})
})