import { describe, it, expect, vitest } from 'vitest'
import axios from 'axios'
import { fetchBookDetail, fetchBooks, setKeyword } from './actions/actions'
import store from './store'

describe('Store Integration test', () => {
	const books = [
		{
			id: 1,
			name: 'Refactoring',
			reviews: [
				{
					name: 'eleven',
					date: '2018/06/21',
					content: 'Excellent work, really impressed by your efforts'
				}
			]
		}
	]

	it('fetch books success', () => {
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books }))

		return store.dispatch(fetchBooks()).then(() => {
			const state = store.getState()
			expect(state.books).toEqual(books)
		})
	})

	it('fetch book detail success', () => {
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books[0] }))

		return store.dispatch(fetchBookDetail(1)).then(() => {
			const state = store.getState()
			expect(state.detail).toEqual(books[0])
		})
	})

	it('fetch books success (with keyword)', () => {
		axios.get = vitest.fn().mockImplementation(() => Promise.resolve({ data: books }))

		store.dispatch(setKeyword('domain'))

		return store.dispatch(fetchBooks()).then(() => {
			expect(axios.get).toHaveBeenCalledWith('http://localhost:8999/books?q=domain')
		})
	})

	it('fetch data failed', () => {
		const message = 'fetch book error'
		axios.get = vitest.fn().mockImplementation(() => Promise.reject({ message }))

		return store.dispatch(fetchBooks()).then(() => {
			const state = store.getState()
			expect(state.message).toEqual(message)
		})
	})
})
