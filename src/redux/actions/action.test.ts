import { describe, it, expect, vitest } from 'vitest'
import { fetchBooks } from './actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import types from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Books Store Actions', () => {
	it('should fetch book list success (without keyword)', () => {
		const books = [
			{ id: 1, name: 'Refactoring' },
			{ id: 2, name: 'Domain-driven design' }
		]
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books }))
		const expectedActions = [
			{ type: types.FETCH_BOOKS_PENDING },
			{ type: types.FETCH_BOOKS_SUCCESS, books }
		]

		const store = mockStore({ books: [] })
		return store.dispatch(fetchBooks('')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('should fetch book list success (with keyword)', () => {
		const books = [
			{ id: 1, name: 'Refactoring' },
			{ id: 2, name: 'Domain-driven design' }
		]
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books }))

		const store = mockStore({ books: [] })
		return store.dispatch(fetchBooks('domain')).then(() => {
			expect(axios.get).toHaveBeenCalledWith('http://localhost:8999/books?q=domain')
		})
	})

	it('should fetch book list error(without keyword)', () => {
		const message = 'network problem'
		axios.get = vitest.fn().mockImplementation(() => Promise.reject({ message }))
		const expectedActions = [
			{ type: types.FETCH_BOOKS_PENDING },
			{ type: types.FETCH_BOOKS_FAILED, message }
		]

		const store = mockStore({ books: [] })
		return store.dispatch(fetchBooks('')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
