import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer/reducer'

const initialState = { books: [], loading: false, error: false, keyword: '', detail: {} }
const middlewares = [thunk]
const composedEnhancers = compose(
	applyMiddleware(...middlewares)
)

const store = createStore(
	reducer,
	initialState,
	composedEnhancers
)

export default store