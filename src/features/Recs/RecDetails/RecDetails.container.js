import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
import { isNil, get } from 'lodash';
import { toastr } from 'react-redux-toastr';

import { getRec } from 'state/selectors/recs.selectors';
import { fetchRec } from 'state/actions/recs.actions'

import RecItem from '../components/RecItem/RecItem.component';
import history from 'history.js';
import messages from 'variables/messages';
import routes from 'variables/routes';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecDetailsContainer extends Component {
  async componentDidMount() {
    const { fetchRec, match } = this.props;
    fetchRec(match.params.id);
  }

  render() {
    const { intact, fetching } = this.props.rec;
    const rec = get(this.props, 'rec.data', null);
    const active = intact || fetching;
    return (
      <LoadingWrapper isLoading={active}>
        <RecItem data={rec} isSingleRecPage />
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  rec: getRec(state)
})

const mapDispatchToProps = {
  fetchRec
}

export default connect(mapStateToProps, mapDispatchToProps)(RecDetailsContainer);
