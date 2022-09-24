import { expect, it, describe } from 'vitest'
import * as jsonpath from 'jsonpath'

const user = {
	name: 'Juntao Qiu',
	address: 'Xian, Shanxi, China',
	projects: [
		{ name: 'ThoughtWorks University' },
		{ name: 'ThoughtWorks Core Business Beach' }
	]
}
const result1 = jsonpath.query(user, '$.projects')
const result2 = jsonpath.query(user, '$.projects[0].name')
const result3 = jsonpath.query(user, '$.projects[0].address')
console.log(JSON.stringify(result1))
console.log(JSON.stringify(result2))
console.log(JSON.stringify(result3))

describe('jsonpath', () => {
	expect.extend({
		toMatchJsonPath (received, argument) {
			const result = jsonpath.query(received, argument)

			if (result.length > 0) {
				return {
					pass: true,
					message: () => 'matched'
				}
			} else {
				return {
					pass: false,
					message: () => `expected ${JSON.stringify(received)} to match jsonpath ${argument}`
				}
			}
		}
	})
	it('matches jsonpath', () => {
		const user = {
			name: 'Juntao'
		}
		expect(user).toMatchJsonPath('$.name')
	})
	it('does not match jsonpath', () => {
		const user = {
			name: 'Juntao',
			address: 'ThoughtWorks'
		}
		expect(user).not.toMatchJsonPath('$.age')
	})
})
