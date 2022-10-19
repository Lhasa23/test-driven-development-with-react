import { Route, Routes } from 'react-router'
import Typography from '@material-ui/core/Typography'
import BookListContainer from './components/BookListContainer'
import BookDetailContainer from './components/BookDetailContainer'

function App () {
	return (
		<div>
			<Typography variant="h2" component="h2" data-test="heading">
				Bookish
			</Typography>
			<Routes>
				<Route path="/" element={<BookListContainer />} />
				<Route path="books">
					<Route path=":id" element={<BookDetailContainer />} />
				</Route>
			</Routes>
		</div>)
}

export default App
