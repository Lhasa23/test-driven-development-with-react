import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import BookList from '../src/components/BookList'

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
		const { container } = render(<BookList {...props} />)
		const title = [...container.querySelectorAll('.title')].map(v => v.innerHTML)
		expect(title).toEqual(props.books.map(book => book.name))
	})
})