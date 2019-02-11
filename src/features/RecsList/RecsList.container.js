import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { getRequestedStatuses } from 'state/selectors/firestore.selectors';
import { getRecs } from 'state/selectors/recs.selectors';
import { fetchFirstPage } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  componentDidMount() {
    this.props.fetchFirstPage(4)
  }

  render() {
    // const { /*reqsStatuses,*/ recs } = this.props;
    const { intact, fetching, data } = this.props.recs;
    // const { recommendation s: recsAreReady } = reqsStatuses;
    const active = intact || fetching;
    return (
      <LoadingWrapper isLoading={active}>
        <RecsList recs={data}/>
      </LoadingWrapper>
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
