import React from 'react'
import { describe, it, expect } from 'vitest'

import { renderWithProvider } from './testUtils'
import ReviewsList from '../src/bookReviews/ReviewsList'

describe('BookList', () => {
	it('get book list success', () => {
		const props = {
			reviews: [
				{
					name: 'eleven',
					date: '2018/06/21',
					content: 'Excellent work, really impressed by your efforts'
				}
			]
		}
		const { container } = renderWithProvider(<ReviewsList {...props} />)
		const reviewer = container.querySelector('span.reviewer')
		const date = container.querySelector('.date')
		const content = container.querySelector('.content')
		expect(reviewer.innerHTML).toEqual(props.reviews[0].name)
		expect(date.innerHTML).toEqual(props.reviews[0].date)
		expect(content.innerHTML).toEqual(props.reviews[0].content)
	})
})