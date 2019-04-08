import React, { Fragment } from 'react';
import { array } from 'prop-types';

import RecItem from './RecItem/RecItem.component';

const RecsListComponent = ({ recs }) => {
  return (
    <Fragment>
      {recs.map(item => (
        <RecItem key={item.id} data={item}/>
      ))}
    </Fragment>
  )
}

RecsListComponent.propTypes = {
  recs: array
}

export default RecsListComponent;
