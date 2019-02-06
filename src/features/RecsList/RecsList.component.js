import React from 'react';
import PropTypes from 'prop-types';

import RecItem from './RecItem/RecItem.component';

const RecsListComponent = ({ recs }) => {
  return (
    <div className='rec-list'>
      {recs.map(item => (
        <RecItem key={item.id} data={item}/>
      ))}
    </div>
  )
}

RecsListComponent.propTypes = {
  recs: PropTypes.array
}

export default RecsListComponent;
