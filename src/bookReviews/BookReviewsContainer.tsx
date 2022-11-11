import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { bookDetailSelector } from '../redux/selector'
import * as actions from '../redux/actions/actions'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'

const BookReviewsContainer = () => {
	const { id } = useParams()
	const location = useLocation()
	const dispatch = useDispatch()
	const { reviews } = useSelector(bookDetailSelector)

	const isForm = () => {
		return location.pathname.includes('create') || location.pathname.includes('edit')
	}
	useEffect(() => {
		dispatch(actions.fetchBookDetail(id))
	}, [])

	return (<>
		{
			isForm() ? <ReviewForm /> : <ReviewsList reviews={reviews} />
		}
	</>)
}

export default BookReviewsContainer
