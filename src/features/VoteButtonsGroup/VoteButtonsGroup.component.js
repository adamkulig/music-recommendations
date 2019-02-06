import React from 'react';

import VoteButton from './VoteButton/VoteButton.container';

const VoteButtonsGroup = ({ likes, reviewId }) => ( 
  <div className='d-flex'>
    <VoteButton likes={likes} reviewId={reviewId} isLikeButton={true} />
    <VoteButton likes={likes} reviewId={reviewId} isLikeButton={false}/>
  </div>
 );
 
export default VoteButtonsGroup;
