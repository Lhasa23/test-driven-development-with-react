import React from 'react'
import { useSelector } from 'react-redux'

import { bookDetailSelector } from '../redux/selector'
import ReviewsList from './ReviewsList'

const BookReviewsContainer = () => {
	const { detail } = useSelector(bookDetailSelector)

	return (<>
		<ReviewsList reviews={detail.reviews} />
	</>)
}

export default BookReviewsContainer
