import { createSelector } from 'reselect'

export const bookListSelector = createSelector([
	state => state.books,
	state => state.loading,
	state => state.error
], (books, loading, error) => ({ books, loading, error }))

export const bookDetailSelector = createSelector([
	state => state.detail
], (detail) => ({ detail }))
