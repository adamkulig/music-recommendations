import React from 'react';
import PropTypes from 'prop-types';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import './LikeButton.scss'

const LikeButtonComponent = ({ count, isLikeButton, onClick }) => {
  return (
    <div className='d-flex align-items-center'>
      <div className='pr-2 thumb' onClick={onClick}>{ isLikeButton ? <GoThumbsup /> : <GoThumbsdown />} </div>
      <div className='small'>{count}</div>
    </div>
  )
}

export default LikeButtonComponent;
