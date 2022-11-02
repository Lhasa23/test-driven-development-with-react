import React, { useCallback, useEffect, useState } from 'react'
import { debounce, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import * as actions from '../../src/redux/actions/actions'

const SearchBox: React.FC<{ onSearch: () => void }> = ({ onSearch }) => {
	const [keyword, setKeyword] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		let key = keyword.trim()
		if (key !== '') {
			dispatch(actions.setKeyword(key))
			onSearchDebounced()
		}
	}, [keyword])

	const onSearchDebounced = useCallback(debounce(() => {
		onSearch()
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