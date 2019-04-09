import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
import { isNil } from 'lodash';
import { toastr } from 'react-redux-toastr';

import { getRec } from 'state/selectors/firestore.selectors'

import RecItem from '../components/RecItem/RecItem.component';
import history from 'history.js';
import messages from 'variables/messages';
import routes from 'variables/routes';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecDetailsContainer extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    const rec = await firestore.get(`recommendations/${match.params.id}`)
    if (!rec.exists) {
      history.push(routes.Main);
      toastr.error(messages.toastrError, messages.toastrSuccessRecDoesNotExist);
    }
  }

  render() {
    const { rec, match } = this.props;
    let currentRec;
    if(!isNil(rec)) {
      currentRec = match.params.id === rec.id;
    } 
    return (
      <LoadingWrapper isLoading={!currentRec}>
        <RecItem data={rec} isSingleRecPage />
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  rec: getRec(state)
})

export default withFirestore(connect(mapStateToProps)(RecDetailsContainer))
