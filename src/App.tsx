import Typography from '@material-ui/core/Typography'
import BookList from './components/BookList'

function App () {
	return (
		<div>
			<Typography variant="h2" component="h2" data-test="heading">
				Bookish
			</Typography>
			<BookList />
		</div>)
}

export default App
