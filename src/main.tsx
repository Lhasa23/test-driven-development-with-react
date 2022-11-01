import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'

const root = (<React.StrictMode>
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
</React.StrictMode>)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	root
)
