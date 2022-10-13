import axios from 'axios'

const books = [
	{ 'name': 'Refactoring', 'id': 1 },
	{ 'name': 'Domain-driven design', 'id': 2 },
	{ 'name': 'Building Microservices', 'id': 3 }
]

describe('Bookish application', function () {
	before(() => {
		return axios.delete('http://localhost:8998/books?_cleanup=true').catch((err) => console.log(err))
	})

	beforeEach(() => {

		return books.forEach((book) => {
			axios.post('http://localhost:8998/books', book, { headers: { 'Content-Type': 'application/json' } })
		})
	})

	afterEach(() => {
		return axios.delete('http://localhost:8998/books?_cleanup=true').catch((err) => console.log(err))
	})

	it('Visits the bookish', function () {
		cy.visit('http://localhost:5173/')
		cy.get('h2[data-tests="heading"]').contains('Bookish')
	})

	it('should show book list', function () {
		cy.visit('http://localhost:5173/')
		cy.get('div[data-tests="book-list"]').should('exist')
		cy.get('div.book-item').should((booklist) => {
			expect(booklist).to.have.length(books.length)

			const titles = [...booklist].map(x => x.querySelector('h2').innerHTML)
			expect(titles).to.deep.equal(
				books.map(value => value.name)
			)
		})
	})
})