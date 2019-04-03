import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
// import countryList from 'react-select-country-list';
import { isEmpty } from 'lodash';

// import { getAuth } from 'state/selectors/firebase.selectors';
import { filterRecs } from 'state/actions/recs.actions';
import { parse, stringify } from 'query-string';

import RecsFilters from './RecsFilters.component';
// import validate from './RecForm.validators';
import routes from 'variables/routes';
import { objectToQueryString } from 'helpers/queryString.helpers';
import history from 'history.js';

class RecFiltersContainer extends Component {

  filterRecs = filters => {
    filters = {'page': '1', ...filters};
    const stringify = objectToQueryString(filters);
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