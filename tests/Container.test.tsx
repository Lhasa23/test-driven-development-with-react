import { describe, it, expect } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import { renderWithProvider } from './testUtils'
import BookListContainer from '../src/bookList/BookListContainer'

describe('Container Network Test', () => {
	it('should render bookListContainer success', async () => {
		const mock = new MockAdapter(axios)
		mock.onGet('http://localhost:8999/books?q=').reply(200, [
			{ 'name': 'Refactoring', 'id': 1 },
			{ 'name': 'Acceptance tests driven development with React', 'id': 2 }
		])
		const { findByText } = renderWithProvider(<BookListContainer />)

		const book1 = await findByText('Refactoring')
		const book2 = await findByText('Acceptance tests driven development with React')

		expect(book1).toBeInTheDocument()
		expect(book2).toBeInTheDocument()
	})
})

