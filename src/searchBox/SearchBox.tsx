import React, { useCallback, useEffect, useState } from 'react'
import { debounce, TextField } from '@material-ui/core'

const SearchBox: React.FC<{ onSearch: React.Dispatch<React.SetStateAction<string>> }> = ({ onSearch }) => {
	const [keyword, setKeyword] = useState('')

	useEffect(() => {
		if (keyword.trim() !== '') {
			onSearchDebounced(`?q=${keyword.trim()}`)
		}
	}, [keyword])

	const onSearchDebounced = useCallback(debounce((query) => {
		onSearch(query)
	}, 500), [])

	return <TextField
		label="Search"
		value={keyword}
		data-test="search"
		onChange={(e) => setKeyword(e.target.value)}
		margin="normal"
		variant="outlined"
	/>
}

export default SearchBox