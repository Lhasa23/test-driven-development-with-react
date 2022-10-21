import React, { ReactNode } from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import BookList from '../src/bookList/BookList'

import { MemoryRouter as Router } from 'react-router-dom'

const renderWithRouter = (component: ReactNode) => {
	return {
		...render(<Router>
			{component}
		</Router>)
	}
}

describe('BookList', () => {
	it('loading status', () => {
		const props = {
			loading: true
		}
		const { container } = render(<BookList {...props} />)
		const content = container.querySelector('p')
		expect(content.innerHTML).toContain('Loading')
	})

	it('error status', () => {
		const props = {
			error: true
		}
		const { container } = render(<BookList {...props} />)
		const content = container.querySelector('p')
		expect(content.innerHTML).toContain('Error')
	})

	it('get book list success', () => {
		const props = {
			books: [
				{
					'name': 'Refactoring',
					'id': 1
				},
				{
					'name': 'Domain-driven design',
					'id': 2
				}
			]
		}
		const { container } = renderWithRouter(<BookList {...props} />)
		const title = [...container.querySelectorAll('.book-item h2')].map(v => v.innerHTML)
		expect(title).toEqual(props.books.map(book => book.name))
	})
})