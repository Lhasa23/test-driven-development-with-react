import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRemoteService = <T> (url: string, initial: T): { resData: T, loading: boolean, error: boolean } => {
	const baseURL = 'http://localhost:8999/books'

	const [resData, setResData] = useState(initial)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getBooks = async () => {
			setLoading(true)
			setError(false)
			try {
				const res = await axios.get(`${baseURL}${url}`)
				setResData(res.data)
			} catch (err) {
				setError(true)
				alert(err)
			} finally {
				setLoading(false)
			}
		}

		getBooks().then()
	}, [])

	return { resData, loading, error }
}
