import React from 'react';
import PropTypes from 'prop-types';
import { GoThumbsdown } from 'react-icons/go';

const DislikeButtonComponent = ({ count, onClick, isVoted }) => {
  return (
    <div className='d-flex align-items-center mx-2'>
      <div className={`pr-2 c-pointer ${isVoted ? 'text-danger' : ''}`} onClick={onClick}><GoThumbsdown /></div>
      <div className='small'>{count}</div>
    </div>
  )
}

DislikeButtonComponent.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  isVoted: PropTypes.bool
}

export default DislikeButtonComponent;
