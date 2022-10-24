import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useRemoteService = <T> (URL: string, initial: T): { resData: T, loading: boolean, error: boolean, setUrl: React.Dispatch<React.SetStateAction<string>> } => {
	const baseURL = 'http://localhost:8999/books'

	const [resData, setResData] = useState(initial)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [url, setUrl] = useState(URL)

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
	}, [url])

	return { resData, loading, error, setUrl }
}
