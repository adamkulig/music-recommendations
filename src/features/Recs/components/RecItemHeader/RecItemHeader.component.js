import React from 'react';
import { string, object } from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';

const RecItemHeader = ({ user, createdAt }) => {
  const time = distanceInWordsToNow(
    createdAt.toDate()
  )
  return (
    <div className='d-flex align-center justify-content-between'>
      <div>
        <span className='text-muted small d-inline-block mr-1'>
          author:
        </span>
        <span className='text-muted small'>
          {user}
        </span>
      </div>
      <div>
        <span className='text-muted small'>
          {time}
        </span>
      </div>
    </div>
  )
}
 
RecItemHeader.propTypes = {
  user: string,
  createdAt: object
}

export default RecItemHeader;