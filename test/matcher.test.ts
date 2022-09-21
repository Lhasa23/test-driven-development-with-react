import {describe, it, expect} from 'vitest'

describe('basic matcher', () => {
	it('basic usage to be', () => {
		expect({ name: 'Juntao' }).not.toBe({ name: 'Juntao' }) //FAIL
	})
	it('basic usage to equal', () => {
		expect({ name: 'Juntao' }).toEqual({ name: 'Juntao' }) //FAIL
	})

	it('match numbers', () => {
		expect('185-3345-3343').toMatch(/^\d{3}-\d{4}-\d{4}$/)
		expect('1853-3345-3343').not.toMatch(/^\d{3}-\d{4}-\d{4}$/)
	})
})

describe('array object matcher', () => {
	it('match arrays', () =>{
		const users = ['Juntao', 'Abruzzi', 'Alex']
		const user0 = 'Juntao'

		expect(users).toContainEqual('Juntao')
		expect(users).toContain(user0)
	})

	it('object in array', () => {
		const users = [
			{ name: 'Juntao' },
			{ name: 'Alex' }
		]
		expect(users).toContainEqual({ name: 'Juntao' }) // PASS
	})

	it('match object', () => {
		const user = {
			name: 'Juntao',
			address: 'Xian, Shaanxi, China'
		}
		expect(user.name).toBeDefined()
		expect(user.age).not.toBeDefined()
	})

})

describe('containing matcher', () => {
	it('string contains', () => {
		const givenName = expect.stringContaining('Juntao')
		expect('Juntao Q123iu').toEqual(givenName)
	})

	it('array containing', () => {
		const users = ['Juntao', 'Abruzzi', 'Alex']
		const userSet = expect.arrayContaining(['Juntao', 'Abruzzi'])
		expect(users).toEqual(userSet)
	})

	it('object containing', () => {
		const user = {
			name: 'Juntao Qiu',
			address: 'Xian, Shaanxi, China',
			projects: [
				{ name: 'ThoughtWorks University' },
				{ name: 'ThoughtWorks Core Business Beach'}
			]
		}
		const matcher = expect.objectContaining({
			name: expect.stringContaining('Juntao'),
			projects: expect.arrayContaining([
				{ name: expect.stringContaining('ThoughtWorks') }
			])
		})
		expect(user).toEqual(matcher)
	})
})

