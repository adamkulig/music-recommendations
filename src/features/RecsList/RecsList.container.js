import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { etRequestedStatuses } from 'state/selectors/firestore.selectors';
import { getRecs } from 'state/selectors/recs.selectors';
import { fetchFirstPage } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  componentDidMount() {
    this.props.fetchFirstPage(4)
  }

  render() {
    const { /*reqsStatuses,*/ recs } = this.props;
    // const { recommendations: recsAreReady } = reqsStatuses;
    return (
      // <LoadingWrapper isLoading={!recsAreReady}>
        <RecsList recs={recs}/>
      // </LoadingWrapper>
    )
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state),
  // reqsStatuses: getRequestedStatuses(state)
})

const mapDispatchToProps = {
  fetchFirstPage
}

export default connect(mapStateToProps, mapDispatchToProps)(RecsListContainer)
