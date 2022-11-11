import React from 'react'
import { describe, it, expect } from 'vitest'

import { renderWithProvider } from './testUtils'
import ReviewsList from '../src/bookReviews/ReviewsList'
import ReviewForm from '../src/bookReviews/ReviewForm'

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

	it('render review from', () => {
		const { container } = renderWithProvider(<ReviewForm />)
		const form = container.querySelector('form')
		const nameInput = container.querySelector('input[name="name"]')
		const contentTextArea = container.querySelector('textarea[name="content"]')
		const submitButton = container.querySelector('button[name="submit"]')

		expect(form).toBeInTheDocument()
		expect(nameInput).toBeInTheDocument()
		expect(contentTextArea).toBeInTheDocument()
		expect(submitButton).toBeInTheDocument()
	})
})