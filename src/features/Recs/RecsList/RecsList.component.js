import React, { Fragment } from 'react';
import { array } from 'prop-types';

import RecItem from '../components/RecItem/RecItem.component';
import PaginationContainer from './Pagination/Pagination.container';

const RecsListComponent = ({ recs }) => {
  return (
    <Fragment>
      <PaginationContainer />
      {recs.map(item => (
        <RecItem key={item.id} data={item}/>
      ))}
      <PaginationContainer />
    </Fragment>
  )
}

RecsListComponent.propTypes = {
  recs: array
}

export default RecsListComponent;
