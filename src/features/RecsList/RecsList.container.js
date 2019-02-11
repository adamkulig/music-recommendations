import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { get } from 'lodash';
import queryString from 'query-string';

import { getRequestedStatuses } from 'state/selectors/firestore.selectors';
import { getRecs } from 'state/selectors/recs.selectors';
import { fetchPage } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed)
    this.props.fetchPage({
      currentPage: parsed.page
    })
  }

  render() {
    const { intact, fetching } = this.props.recs;
    const recs = get(this.props, 'recs.data.recs', []);
    const active = intact || fetching;
    return (
      <LoadingWrapper isLoading={active}>
        <RecsList recs={recs}/>
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state)
})

const mapDispatchToProps = {
  fetchPage
}

export default connect(mapStateToProps, mapDispatchToProps)(RecsListContainer)
