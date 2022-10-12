import Typography from '@material-ui/core/Typography'
import BookListContainer from './components/BookListContainer'

function App () {
	return (
		<div>
			<Typography variant="h2" component="h2" data-test="heading">
				Bookish
			</Typography>
			<BookListContainer />
		</div>)
}

export default App
