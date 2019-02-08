import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getAllRecs, getRequestedStatuses } from 'state/selectors/firestore.selectors';

import RecsList from './RecsList.component';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  render() {
    const { reqsStatuses, recs } = this.props;
    const { recommendations: recsAreReady } = reqsStatuses;
    return (
      <LoadingWrapper isLoading={!recsAreReady}>
        <RecsList recs={recs}/>
      </LoadingWrapper>
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
