import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	'review-item': {
		padding: '20px',
		borderTop: '1px solid gray'
	},
	information: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	reviewer: {
		fontWeight: 'bolder'
	},
	date: {
		fontWeight: 'bolder'
	},
	content: {
		fontSize: '16px',
		marginTop: '8px'
	}
}))

const ReviewsList: React.FC<{ reviews: any[] }> = ({ reviews }) => {
	const classes = useStyles()
	return (<>
		{
			reviews.map((value) => (<div className={classes['review-item']} key={`${value.name}-${value.date}`}>
					<div className={classes.information}>
						<span className="reviewer">{value.name}</span>
						<span className="date">{value.date}</span>
					</div>
					<p className="content">{value.content}</p>
				</div>)
			)
		}
	</>)
}

export default ReviewsList
