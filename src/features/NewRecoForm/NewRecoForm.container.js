import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import countryList from 'react-select-country-list';

import NewRecoForm from './NewRecoForm.component';
import { createRecommendation } from '../../state/actions/reviews.actions';
import routes from '../../variables/routes';
import validate from './NewRecoForm.validators';

class NewRecoFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: countryList().getData()
    }
  }

  render() {
    const { handleSubmit, submitting, createRecommendation } = this.props;
    const { isEmpty } = this.props.auth;
    if (isEmpty) {
      return <Redirect push to={routes.Main} />
    }
    return (
      <NewRecoForm 
        handleSubmit={handleSubmit(createRecommendation)} 
        submitting={submitting}
        countries={this.state.countries}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  users: state.firestore.data.recommendations
});

const mapDispatchToProps = {
  createRecommendation
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'newReco',
    validate
  }),
  firestoreConnect([
    { collection: 'recommendations' }
  ])
)(NewRecoFormContainer);
