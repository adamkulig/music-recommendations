import React from 'react';
import { bool, node } from 'prop-types';

import Spinner from './Spinner/Spinner.component';

const LoadingWrapper = ({ isLoading, children }) => {
	if (isLoading) {
    return <Spinner />
  } else {
    return children;
  } 
}

LoadingWrapper.propTypes = {
  isLoading: bool,
  children: node
}

export default LoadingWrapper;
