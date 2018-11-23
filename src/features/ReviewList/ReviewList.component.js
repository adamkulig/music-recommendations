import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem/ReviewItem.component';

const ReviewListComponent = ({ recommendations }) => {
  return (
    <div className='review-list mt-3 mb-5'>
      {recommendations && recommendations.map(item => (
        <ReviewItem key={item.id} data={item}/>
      ))}
    </div>
  )
}

ReviewListComponent.propTypes = {
  recommendations: PropTypes.array
}

export default ReviewListComponent;
