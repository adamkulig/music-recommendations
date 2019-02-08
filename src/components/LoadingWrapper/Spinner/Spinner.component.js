import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Loader 
        type="Audio"
        color="#DDD"
        height="80"	
        width="80"
      />   
    </div>
  );
}
 
export default Spinner;