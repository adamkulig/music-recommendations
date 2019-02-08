import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getAllRecs, getRequestedStatuses } from 'state/selectors/firestore.selectors';

import RecsList from './RecsList.component';
import Spinner from 'components/Spinner/Spinner.component';

class RecsListContainer extends Component {
  render() {
    const { reqsStatuses, recs } = this.props;
    const { recommendations: recsAreReady } = reqsStatuses;
    return (
      recsAreReady ? (
        <RecsList recs={recs}/>
      ) : (
        <Spinner />
      )
    )
  }
}

const mapStateToProps = state => ({
  recs: getAllRecs(state),
  reqsStatuses: getRequestedStatuses(state)
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recommendations', orderBy: ['createdAt', 'desc'] }
  ])
)(RecsListContainer)
