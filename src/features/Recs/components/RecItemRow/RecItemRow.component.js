import React from 'react';
import { string, node } from 'prop-types';

const RecItemRow = ({ header, children }) => (
  <div className='d-flex justify-content-center align-items px-3 mb-1'>
    <div className='text-muted font-weight-light mr-2'>
      {header}
    </div>
      {children}
  </div>
);

RecItemRow.propTypes = {
  header: string,
  children: node
}

export default RecItemRow;
