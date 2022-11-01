import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import { Router } from 'react-router'

export const renderWithProvider = (component: ReactNode) => {
	return {
		...render(<Provider store={store}>
			{component}
		</Provider>)
	}
}