type D = { key: string, value: number }

interface Days {
	[name: string]: D
}

const days: Days = {
	d: { key: 'Dev', value: 0.5 },
	D: { key: 'Dev', value: 1 },
	q: { key: 'QA', value: 0.5 },
	Q: { key: 'QA', value: 1 },
	b: { key: 'Blocked', value: 0.5 },
	B: { key: 'Blocked', value: 1 }
}

function parse (sequence: string) {
	return sequence.split('').reduce((result: { [key: string]: number }, char: keyof Days) => {
		const { key, value } = days[char]
		result[key] = (result[key] || 0) + value
		return result
	}, {})
}

export const translate = (sequence: string) => {
	return parse(sequence)
}