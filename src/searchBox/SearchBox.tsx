import React, { useCallback, useEffect, useState } from 'react'
import { debounce, TextField } from '@material-ui/core'

const SearchBox: React.FC<{ onSearch: React.Dispatch<React.SetStateAction<string>> }> = ({ onSearch }) => {
	const [term, setTerm] = useState('')

	useEffect(() => {
		if (term.trim() !== '') {
			onSearchDebounced(`?q=${term.trim()}`)
		}
	}, [term])

	const onSearchDebounced = useCallback(debounce((query) => {
		onSearch(query)
	}, 500), [])

	return <TextField
		label="Search"
		value={term}
		data-test="search"
		onChange={(e) => setTerm(e.target.value)}
		margin="normal"
		variant="outlined"
	/>
}

export default SearchBox