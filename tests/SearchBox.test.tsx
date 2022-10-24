import React from 'react'
import { expect, vitest, it, describe } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchBox from '../src/searchBox/SearchBox'

describe('SearchBox', () => {
	it('should onSearch function be called', () => {
		const onSearch = vitest.fn()

		const { container } = render(<SearchBox onSearch={onSearch} />)
		const input = container.querySelector('input[type="text"]')

		userEvent.type(input, 'domain')

		setTimeout(() => {
			expect(onSearch).toHaveBeenCalled()
		}, 600)
	})

	it('should onSearch function not be called when input empty', () => {
		const onSearch = vitest.fn()

		const { container } = render(<SearchBox onSearch={onSearch} />)
		const input = container.querySelector('input[type="text"]')

		userEvent.type(input, '   ')

		setTimeout(() => {
			expect(onSearch).not.toHaveBeenCalled()
		}, 600)
	})
})