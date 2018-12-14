import React from 'react';
import PropTypes from 'prop-types';
import { GoThumbsup } from 'react-icons/go';

const LikeButtonComponent = ({ count, onClick, isVoted }) => {
  return (
    <div className='d-flex align-items-center mx-2'>
      <div className={`pr-2 c-pointer ${isVoted ? 'text-success' : ''}`} onClick={onClick}><GoThumbsup /></div>
      <div className='small'>{count}</div>
    </div>
  )
}

LikeButtonComponent.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  isVoted: PropTypes.bool
}

export default LikeButtonComponent;
