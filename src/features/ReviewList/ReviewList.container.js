import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ReviewList from './ReviewList.component';
// import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { getAllRecos } from 'state/selectors/firestore.selectors'


class ReviewListContainer extends Component {
  render() {
    const { recos } = this.props;
    return (
      <ReviewList recos={recos}/>
    );
  }
}

const mapStateToProps = state => ({
  recos: getAllRecos(state)
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations', orderBy: ['createdAt', 'desc'] }
  ])
)(ReviewListContainer)
