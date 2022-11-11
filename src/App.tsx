import { Route, Routes } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import BookListContainer from './bookList/BookListContainer'
import BookDetailContainer from './bookDetail/BookDetailContainer'
import BookReviewsContainer from './bookReviews/BookReviewsContainer'

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
					<Route path=":id/reviews" element={<BookReviewsContainer />} />
					<Route path=":id/review/create" element={<BookReviewsContainer />} />
					<Route path=":id/review/edit" element={<BookReviewsContainer />} />
				</Route>
			</Routes>
		</div>)
}

export default App
