import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRemoteService = (initial = []) => {
	const [books, setBooks] = useState(initial)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getBooks = async () => {
			setLoading(true)
			setError(false)
			try {
				const res = await axios.get('http://localhost:8999/books')
				setBooks(res.data)
			} catch (err) {
				setError(true)
				alert(err)
			} finally {
				setLoading(false)
			}
		}

		getBooks().then()
	}, [])
	return { books, loading, error }
}
