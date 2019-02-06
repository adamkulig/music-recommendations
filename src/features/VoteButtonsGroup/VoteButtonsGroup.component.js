import React from 'react';

import VoteButton from './VoteButton/VoteButton.container';

const VoteButtonsGroup = ({ likes, recId }) => ( 
  <div className='d-flex'>
    <VoteButton likes={likes} recId={recId} isLikeButton={true} />
    <VoteButton likes={likes} recId={recId} isLikeButton={false}/>
  </div>
 );
 
export default VoteButtonsGroup;
