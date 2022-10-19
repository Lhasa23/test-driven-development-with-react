import axios from 'axios'

let books: any[] = []

describe('Bookish application', function () {
	beforeEach(async () => {
		const response = await axios.get('http://localhost:8999/books')
		return books = response.data
	})

	it('Visits the bookish', function () {
		cy.visit('http://localhost:5173/')
		cy.get('h2[data-test="heading"]').contains('Bookish')
	})

	it('should show book list', function () {
		cy.visit('http://localhost:5173/')
		cy.get('div[data-test="book-list"]').should('exist')
		cy.get('div.book-item').should((booklist) => {
			expect(booklist).to.have.length(books.length)

			const titles = [...booklist].map(x => x.querySelector('h2').innerHTML)
			expect(titles).to.deep.equal(
				books.map(value => value.name)
			)
		})
	})
	it('Goes to the detail page', () => {
		cy.visit('http://localhost:5173/')

		const index = 0

		cy.get('div.book-item').contains('View Details').eq(index).click()
		cy.url().should('include', '/books/1')
		cy.get('h2.title').contains('Refactoring')
	})
})