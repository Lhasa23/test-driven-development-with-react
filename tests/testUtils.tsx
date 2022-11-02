import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

export const renderWithProvider = (component: ReactNode) => {
	return {
		...render(<Provider store={store}>
			<Router>
				{component}
			</Router>
		</Provider>)
	}
}