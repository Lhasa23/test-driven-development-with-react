import React, { useEffect, useState } from 'react'

const BookDetail: React.FC<{ book: any }> = ({ book }) => {
	const [overLength, setOverLength] = useState(false)
	const [expanded, setExpanded] = useState(false)
	const [desc, setDesc] = useState(book.description)

	const objEmpty = (obj: Object): boolean => {
		return obj
			&& Object.keys(obj).length === 0
			&& Object.getPrototypeOf(obj) === Object.prototype
	}

	useEffect(() => {
		if (objEmpty(book)) return
		setOverLength(book.description?.length > 300)
	}, [book])

	useEffect(() => {
		if (objEmpty(book)) return
		if (!overLength) return
		if (expanded) {
			setDesc(book.description)
			return
		}
		setDesc(`${book.description?.substring(0, 300)}...`)
	}, [book, expanded, overLength])

	return (<div data-test="book-detail">
		<h2 className="title">{book.name}</h2>
		<div className="description-wrapper">
			<p className="description">{desc}</p>
			{overLength ? (
				<div className="expand-bar">
					{!expanded && <button className="expand-btn" onClick={() => setExpanded(true)}>View More</button>}
					{expanded && <button className="collapse-btn" onClick={() => setExpanded(false)}>Collapse</button>}
				</div>
			) : (<></>)}
		</div>
	</div>)
}

export default BookDetail
