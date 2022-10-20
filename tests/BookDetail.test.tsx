import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import BookDetail from '../src/bookDetail/BookDetail'

describe('BookDetail', () => {
	it('render book detail correct', () => {
		const props = {
			book: {
				id: 1,
				name: 'Refactoring',
				description: `Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.`
			}
		}
		const { container } = render(<BookDetail {...props} />)
		expect(container.querySelector('.title').innerHTML).toEqual(props.book.name)
		expect(container.querySelector('.description').innerHTML).toEqual(props.book.description)
	})

	// it('expand-collapse should work', () => {
	// 	const props = {
	// 		book: {
	// 			id: 1,
	// 			name: 'Refactoring',
	// 			description: `Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software again.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.Martin Fowler\'s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software again.`
	// 		}
	// 	}
	// 	const { container } = render(<BookDetail {...props} />)
	// 	expect(container.querySelector('.description').innerHTML).toEqual(props.book.description.substring(0, 300) + '...')
	//
	// 	const expand = container.querySelector('.expand-btn')
	// 	expand.click()
	//
	// 	expect(container.querySelector('.description').innerHTML).toEqual(props.book.description)
	// })
})