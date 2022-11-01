import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import BookDetail from './BookDetail'
import * as actions from '../redux/actions/actions'
import bookListSelector from '../redux/selector'

const BookDetailContainer: React.FC = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const { detail } = useSelector(bookListSelector)

	useEffect(() => {
		dispatch(actions.fetchBookDetail(id))
	}, [])

	return <BookDetail book={detail} />
}

export default BookDetailContainer