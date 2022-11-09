import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { bookDetailSelector } from '../redux/selector'
import ReviewsList from './ReviewsList'
import * as actions from '../redux/actions/actions'

const BookReviewsContainer = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { reviews } = useSelector(bookDetailSelector)

	useEffect(() => {
		dispatch(actions.fetchBookDetail(id))
	}, [])

	return (<>
		<ReviewsList reviews={reviews} />
	</>)
}

export default BookReviewsContainer
