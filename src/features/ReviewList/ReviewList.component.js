import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem/ReviewItem.component';

const ReviewListComponent = ({ recos }) => {
  return (
    <div className='review-list'>
      {recos.map(item => (
        <ReviewItem key={item.id} data={item}/>
      ))}
    </div>
  )
}

ReviewListComponent.propTypes = {
  recos: PropTypes.array
}

export default ReviewListComponent;
