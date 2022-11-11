import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { submitReview } from '../redux/actions/actions'

const useStyles = makeStyles(theme => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '50%'
	}
}))

const ReviewForm: React.FC<{ review: {} }> = ({ review = {} }) => {
	const { id } = useParams()
	const classes = useStyles()
	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [content, setContent] = useState('')

	return (<>
		<form className={classes.form} noValidate autoComplete="off">
			<TextField
				label="Name"
				name="name"
				margin="normal"
				variant="outlined"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<TextField
				label="Content"
				name="content"
				margin="normal"
				variant="outlined"
				multiline
				maxRows="4"
				value={content}
				onChange={e => setContent(e.target.value)}
			/>
			<Button
				variant="contained"
				color="primary"
				name="submit"
				onClick={() => dispatch(submitReview(id, { name, content }))}
			>
				Submit
			</Button>
		</form>
	</>)
}

export default ReviewForm
