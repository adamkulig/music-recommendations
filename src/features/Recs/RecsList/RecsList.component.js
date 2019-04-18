import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';

import RecItem from '../components/RecItem/RecItem.component';
import PaginationContainer from './Pagination/Pagination.container';

const RecsListComponent = ({ recs }) => {
  return (
    <div className='recs__list'>
      {!isEmpty(recs) ? (
        <>
          {recs.map(item => (
            <RecItem key={item.id} data={item}/>
          ))}
          <PaginationContainer />
        </>
      ) : (
        <p className='text-center'>No results.</p>
      )}
    </div>
  )
}

RecsListComponent.propTypes = {
  recs: array
}

export default RecsListComponent;
