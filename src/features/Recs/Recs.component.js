import React, { Component, Fragment } from 'react';

import RecsList from './RecsList/RecsList.container';
import RecsFilters from './RecsFilters/RecsFilters.container';

class Recs extends Component {
  render() { 
    return (
    <Fragment>
      <RecsFilters />
      <RecsList />
    </Fragment> );
  }
}
 
export default Recs;