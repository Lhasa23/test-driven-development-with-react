import React from 'react'

const ReviewsList: React.FC<{ reviews: any[] }> = ({ reviews }) => {
	return (<>
		{
			reviews.map((value) => (<div key={`${value.name}-${value.date}`}>
					<span className="reviewer">{value.name}</span>
				</div>)
			)
		}
	</>)
}

export default ReviewsList
