import React from 'react';

const RecItemRowLink = ({header, url, colorClass, children}) => {
  const href = /^https?:\/\//.test(url) ? url : `https://${url}`
  return (
    <div className='text-center px-3 mb-1'>
      <span className='text-muted font-weight-light d-inline-block mr-2'>
        {header}
      </span>
      <a href={href} target="_blank" rel="noopener noreferrer" >
        <span className={colorClass}>{children}</span>
      </a>
    </div>
  )
}

export default RecItemRowLink;
