import { describe, it, expect, vi } from 'vitest'

describe('basic mock test', () => {
	it('create a callable function', () => {
		const mock = vi.fn()
		mock('Juntao', '123')
		expect(mock).toHaveBeenCalled()
		expect(mock).toHaveBeenCalledWith('Juntao', '123')
		expect(mock).toHaveBeenCalledTimes(1)
	})
	it('mock implementation', () => {
		const fakeAdd = vi.fn().mockImplementation((a, b) => 5)
		expect(fakeAdd(1, 1)).toBe(5)
		expect(fakeAdd).toHaveBeenCalledWith(1, 1)
	})
})

const fetchUser = (id) => {
	return fetch(`http://localhost:4000/users/${id}`)
}

describe('mock request', () => {
	const user = {
		name: 'Juntao'
	}
	it('mock fetch', () => {
		// given
		global.fetch = vi.fn().mockImplementation(() => Promise.resolve({ user }))
		// when
		fetchUser(111).then(x => console.log(x))
		// then
		expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/users/111')
	})
})