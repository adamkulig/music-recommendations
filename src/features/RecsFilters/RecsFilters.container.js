import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
// import countryList from 'react-select-country-list';
import { isEmpty } from 'lodash';

// import { getAuth } from 'state/selectors/firebase.selectors';
import { filterRecs } from 'state/actions/recs.actions';
import queryString from 'query-string';

import RecsFilters from './RecsFilters.component';
// import validate from './RecForm.validators';
// import routes from 'variables/routes';

class RecFiltersContainer extends Component {

  filterRecs = data => {
    console.log('data :', data);
    const parsed = queryString.parse(window.location.search);
    parsed.page = 1;
    !isEmpty(data.band) {parsed.band = data.band }
  }

  render() {
    const { handleSubmit, submitting, filterRecs } = this.props;
    return (
      <RecsFilters 
        handleSubmit={handleSubmit(this.filterRecs)} 
        submitting={submitting}
      />
    );
  }
}

// const mapStateToProps = state => ({
//   auth: getAuth(state)
// });

// const mapDispatchToProps = {
//   filterRecs
// }

export default compose(
  // connect(null, mapDispatchToProps),
  reduxForm({
    form: 'recsFilters'
  }),
)(RecFiltersContainer);