import { describe, it, expect } from 'vitest'
import { translate } from 'src/chapter3/index'

describe('parse single letter', () => {
	it('should parse d letter', function () {
		expect(translate('d')).toEqual({ 'Dev': 0.5 })
	})
	it('should parse D letter', function () {
		expect(translate('D')).toEqual({ 'Dev': 1 })
	})
	it('should parse q letter', function () {
		expect(translate('q')).toEqual({ 'QA': 0.5 })
	})
	it('should parse Q letter', function () {
		expect(translate('Q')).toEqual({ 'QA': 1 })
	})
	it('should parse b letter', function () {
		expect(translate('b')).toEqual({ 'Blocked': 0.5 })
	})
	it('should parse B letter', function () {
		expect(translate('B')).toEqual({ 'Blocked': 1 })
	})
})

describe('parse a sequence', () => {
	it('should parse dD', function () {
		expect(translate('dD')).toEqual({ 'Dev': 1.5 })
	})
	it('should parse dDq', function () {
		expect(translate('dDq')).toEqual({ 'Dev': 1.5, 'QA': 0.5 })
	})
	it('should parse dDqB', function () {
		expect(translate('dDqB')).toEqual({ 'Dev': 1.5, 'QA': 0.5, 'Blocked': 1 })
	})
})
