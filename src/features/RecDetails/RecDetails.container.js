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
    const reco = await firestore.get(`recommendations/${match.params.id}`)
    if (!reco.exists) {
      history.push(routes.Main);
      toastr.error(messages.toastrError, messages.toastrSuccessRecDoesNotExist);
    }
  }

  render() {
    const { reco } = this.props;
    return (
      !isNil(reco) ? (
        <RecDetails data={reco} />
      ) : (
        <span>Loading...</span>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  reco: getRec(state)
})

// export default connect(mapStateToProps)(RecDetailsContainer)
export default withFirestore(connect(mapStateToProps)(RecDetailsContainer))
