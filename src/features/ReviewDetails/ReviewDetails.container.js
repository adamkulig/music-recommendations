import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReviewDetails from './ReviewDetails.component';
// import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { isNil } from 'lodash';
import { getRecoById } from 'state/selectors/firestore.selectors'


class ReviewDetailsContainer extends Component {
  render() {
    const { reco } = this.props;
    return (
      !isNil(reco) ? (
        <ReviewDetails data={reco} />
      ) : (
        <span>Loading...</span>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  reco: getRecoById(state, ownProps.match.params.id)
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations' }
  ])
)(ReviewDetailsContainer)