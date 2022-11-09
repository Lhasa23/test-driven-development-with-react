import axios from 'axios'

let books: any[] = []

describe('Bookish application', function () {
	beforeEach(async () => {
		const response = await axios.get('http://localhost:8999/books')
		return books = response.data
	})

	const visitApplicationDev = () => {
		cy.visit('http://localhost:5173/')
	}

	const checkApplicationTitle = () => {
		cy.get('h2[data-test="heading"]').contains('Bookish')
	}

	const checkBookListTitle = () => {
		cy.get('div[data-test="book-list"]').should('exist')
		cy.get('div.book-item').should((booklist) => {
			expect(booklist).to.have.length(books.length)

			const titles = [...booklist].map(x => x.querySelector('h2').innerHTML)
			expect(titles).to.deep.equal(
				books.map(value => value.name)
			)
		})
	}

	const checkBookDetail = () => {
		cy.get('div.book-item').contains('View Detail').eq(0).click()
		cy.url().should('include', '/books/1')
		cy.get('h2.title').contains('Refactoring')
		cy.get('button.reviews').contains('View Reviews')
	}

	const checkSearchingKeyword = () => {
		cy.get('[data-test="search"] input').type('domain')
		cy.get('div.book-item').should('have.length', 1)
		cy.get('div.book-item').eq(0).contains('Domain-driven design')
	}

	it('should visit the bookish', function () {
		visitApplicationDev()
		checkApplicationTitle()
	})

	it('should show book list', function () {
		visitApplicationDev()
		checkBookListTitle()
	})

	it('should go to the detail page', () => {
		visitApplicationDev()
		checkBookDetail()
	})

	it('should search books from keyword', () => {
		visitApplicationDev()
		checkSearchingKeyword()
	})

	it(`should go to book reviews page`, () => {
		cy.visit('http://localhost:5173/books/1')
		cy.get('button.reviews').contains('View Reviews').eq(0).click()
		cy.url().should('include', '/reviews')
		cy.get('span.reviewer').contains('eleven')
		cy.get('span.date').contains('2018/06/21')
		cy.get('p.content').contains('Excellent work, really impressed by your efforts')
	})
})