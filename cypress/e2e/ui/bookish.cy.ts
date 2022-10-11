describe('Bookish application', function () {
	it('Visits the bookish', function () {
		cy.visit('http://localhost:5173/')
		cy.get('h2[data-test="heading"]').contains('Bookish')
	})

	it('should show book list', function () {
		cy.visit('http://localhost:5173/')
		cy.get('div[data-test="book-list"]').should('exist')
		cy.get('div.book-item').should((books) => {
			expect(books).to.have.length(2)

			const title = [...books].map(e => e.querySelector('h2').innerHTML)
			expect(title).to.deep.equal(['Refactoring', 'Domain-driven design'])
		})
	})
})