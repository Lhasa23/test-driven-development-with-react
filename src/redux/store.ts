import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducer/reducer'

const initialState = { books: [], loading: false, error: false, keyword: '', detail: {}, reviews: [] }

const store = configureStore({
	reducer,
	preloadedState: initialState
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
