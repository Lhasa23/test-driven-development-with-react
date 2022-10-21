import React from 'react'
import { describe, it, expect } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import BookDetail from '../src/bookDetail/BookDetail'

describe('BookDetail', () => {
	it('render book detail correct', () => {
		const props = {
			book: {
				id: 1,
				name: 'Refactoring',
				description: `Martin Fowler\'s Refactoring defined core ideas and techniques that.`
			}
		}
		const { container } = render(<BookDetail {...props} />)
		expect(container.querySelector('.title').innerHTML).toEqual(props.book.name)
		expect(container.querySelector('.description').innerHTML).toEqual(props.book.description)
	})

	it('expand-collapse should work', () => {
		const props = {
			book: {
				id: 1,
				name: 'Refactoring',
				description: `Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software again.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software again.`
			}
		}
		const { container } = render(<BookDetail {...props} />)
		const description = container.querySelector('.description')
		const book = props.book

		expect(description.innerHTML).toEqual(`${book.description?.substring(0, 300)}...`)

		const expand = container.querySelector('.expand-btn')
		fireEvent(
			expand,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true
			})
		)

		expect(description.innerHTML).toEqual(book.description)
	})
})