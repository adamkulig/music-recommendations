import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewItem from './ReviewItem/ReviewItem.component';

const ReviewListComponent = ({ recommendations }) => {
  return (
    <div className='review-list mt-3 mb-5'>
      {recommendations && recommendations.map(item => (
        <Link to={`/recommendations/${item.id}`} style={{ textDecoration: 'none' }}>
          <ReviewItem key={item.id} data={item}/>
        </Link>
      ))}
    </div>
  )
}

ReviewListComponent.propTypes = {
  recommendations: PropTypes.array
}

export default ReviewListComponent;
