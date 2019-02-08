import React from 'react';
import Spinner from './Spinner/Spinner.component';

const LoadingWrapper = ({ isLoading, children }) => {
	if (isLoading) {
    return <Spinner />
  } else {
    return children
  } 
}

export default LoadingWrapper;
