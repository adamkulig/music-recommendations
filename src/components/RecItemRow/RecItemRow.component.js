import React from 'react';

const RecItemRow = ({header, data, dataInLink = false}) => (
  <div className='text-center px-3 mb-1'>
    <span className='text-muted font-weight-light d-inline-block mr-2'>
      {header}
    </span>
    <span>{dataInLink ? <a href={data} target='_blank' rel='noopener noreferrer'>facebook</a> : data}</span>
  </div>
);

export default RecItemRow;
