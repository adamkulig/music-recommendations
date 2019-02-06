import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getAllRecs } from 'state/selectors/firestore.selectors';

import RecsList from './RecsList.component';

class RecsListContainer extends Component {
  render() {
    const { recs } = this.props;
    return (
      <RecsList recs={recs}/>
    );
  }
}

const mapStateToProps = state => ({
  recs: getAllRecs(state)
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations', orderBy: ['createdAt', 'desc'] }
  ])
)(RecsListContainer)
