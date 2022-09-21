import {expect, describe, it} from 'vitest'
import {add} from 'src/calc'

describe('calculator', function () {
	it('add two numbers', function () {
		expect(add(1, 2)).toEqual(3)
	})
})