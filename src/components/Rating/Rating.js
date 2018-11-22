import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <span>rated: {rating}/6</span>
)
  
Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating;
