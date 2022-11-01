import { createSelector } from 'reselect'

const bookListSelector = createSelector([
	state => state.books,
	state => state.detail,
	state => state.loading,
	state => state.error
], (books, detail, loading, error) => ({ books, detail, loading, error }))

export default bookListSelector
