import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { withFirestore } from 'react-redux-firebase';
import { isNil } from 'lodash';
import { toastr } from 'react-redux-toastr';

import { getRec } from 'state/selectors/firestore.selectors'

import RecDetails from './RecDetails.component';
import history from 'history.js';
import messages from 'variables/messages';
import routes from 'variables/routes';


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
    let currentRec = null;
    if(!isNil(rec)) {
      currentRec = match.params.id === rec.id;
    } 
    return (
      currentRec ? (
        <RecDetails data={rec} />
      ) : (
        <span>Loading...</span>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  rec: getRec(state)
})

// export default connect(mapStateToProps)(RecDetailsContainer)
export default withFirestore(connect(mapStateToProps)(RecDetailsContainer))
