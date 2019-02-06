import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { isNil } from 'lodash';

import { getRecById } from 'state/selectors/firestore.selectors'

import RecDetails from './RecDetails.component';


class RecDetailsContainer extends Component {
  render() {
    const { reco } = this.props;
    return (
      !isNil(reco) ? (
        <RecDetails data={reco} />
      ) : (
        <span>Loading...</span>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  reco: getRecById(state, ownProps.match.params.id)
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations' }
  ])
)(RecDetailsContainer)
