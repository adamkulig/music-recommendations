import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReviewDetails from './ReviewDetails.component';
// import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { isNil } from 'lodash';


class ReviewDetailsContainer extends Component {
  render() {
    const { reviewData } = this.props;
    return (
      !isNil(reviewData) ? (
        <ReviewDetails data={reviewData} />
      ) : (
        <span>Loading...</span>
      )
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const reviews = state.firestore.data.recommendations;
  const review = reviews ? reviews[id] : null;
  return {
    reviewData: review
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations' }
  ])
)(ReviewDetailsContainer)