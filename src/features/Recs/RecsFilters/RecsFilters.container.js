import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';

import { filterRecs } from 'state/actions/recs.actions'

import RecsFilters from './RecsFilters.component';
import routes from 'variables/routes';
import { filtersToQueryString, filtersToObject } from 'helpers/filters.helpers';
import history from 'history.js';

class RecFiltersContainer extends Component {

  onFilterRecs = filters => {
    // const { filterRecs } = this.props;
    // filterRecs(filtersToObject(filters))
    const filtersForUrl = {...filters, 'page': '1', };
    // console.log('filters :', filters);
    // console.log('filtersForUrl :', filtersForUrl);
    const stringify = filtersToQueryString(filtersForUrl);
    const queryString = encodeURI(stringify)
    history.push({
      pathname: routes.Recs,
      search: queryString
    })
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <RecsFilters 
        handleSubmit={handleSubmit(this.onFilterRecs)} 
        submitting={submitting}
      />
    );
  }
}

// const mapStateToProps = state => ({
//   auth: getAuth(state)
// });

const mapDispatchToProps = {
  filterRecs
}

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'recsFilters'
  }))(RecFiltersContainer);