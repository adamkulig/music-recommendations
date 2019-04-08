import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import countryList from 'react-select-country-list';
import { func, bool, object } from 'prop-types';

import { getAuth } from 'state/selectors/firebase.selectors';
import { createRec } from 'state/actions/recs.actions';

import RecForm from './RecForm.component';
import validate from './RecForm.validators';
import routes from 'variables/routes';

class RecFormContainer extends Component {
  static propTypes = {
    handleSubmit: func,
    submitting: bool,
    createRec: func,
    auth: object
  }

  state = {
    countries: countryList().getData()
  }

  render() {
    const { handleSubmit, submitting, createRec, auth } = this.props;
    const { isEmpty } = auth;
    if (isEmpty) {
      return <Redirect push to={routes.Main} />
    }
    return (
      <RecForm 
        handleSubmit={handleSubmit(createRec)} 
        submitting={submitting}
        countries={this.state.countries}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

const mapDispatchToProps = {
  createRec
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'newRec',
    validate
  }),
)(RecFormContainer);
