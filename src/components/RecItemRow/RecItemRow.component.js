import React from 'react';

const RecItemRow = ({header, data, large = false}) => (
  <div className='text-center px-3 mb-1'>
    <span className='text-muted font-weight-light d-inline-block mr-2'>
      {header}
    </span>
    <span className={large ? 'large-font' : ''}>{data}</span>
  </div>
);

export default RecItemRow;
