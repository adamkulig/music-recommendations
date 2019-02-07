import React, { Fragment } from 'react';
import moment from 'moment';

const RecItemHeader = ({ user, createdAt, band }) => {
  return (
    <Fragment>
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
            {moment(createdAt.toDate()).fromNow()}
          </span>
        </div>
      </div>
    </Fragment>
  )
}
 
export default RecItemHeader;