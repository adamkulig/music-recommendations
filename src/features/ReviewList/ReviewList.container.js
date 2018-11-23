import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReviewList from './ReviewList.component';
import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';


class ReviewListContainer extends Component {
  render() {
    const { recommendations } = this.props;
    return (
      <ReviewList recommendations={recommendations}/>
    );
  }
}

const mapStateToProps = state => ({
  recommendations: state.firestore.ordered.recommendations
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations' }
  ])
)(ReviewListContainer)
