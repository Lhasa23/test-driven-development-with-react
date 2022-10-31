import { describe, it, expect, vitest } from 'vitest'
import axios from 'axios'
import { fetchBooks } from './actions/actions'
import store from './store'

describe('Store Integration test', () => {
	const books = [
		{ id: 1, name: 'Refactoring' }
	]
	it('fetch books success', () => {
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books }))

		return store.dispatch(fetchBooks('')).then(() => {
			const state = store.getState()
			expect(state.books).toEqual(books)
		})
	})
})
