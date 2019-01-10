import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton.component';
import DislikeButton from './DislikeButton.component';
// import { firestore } from 'firebase';
// import { firestoreConnect, getFirebase } from 'react-redux-firebase';
import { addVote, deleteVote } from '../../state/actions/voting.actions';
import { get } from 'lodash';

class VoteButtonContainer extends Component {

  onVote = () => {
    const isLoggedIn = !this.props.auth.isEmpty;
    if (isLoggedIn) {
      const { auth, isLikeButton, likes, reviewId } = this.props;
      console.log(likes)

      if (likes.some(vote => vote.userId === auth.uid && vote.like === isLikeButton)) {
        this.props.deleteVote({
          userId: auth.uid,
          like: isLikeButton,
          reviewId: reviewId
        })
      } else if (likes.some(vote => vote.userId === auth.uid && vote.like === !isLikeButton)) {
        this.props.deleteVote({
          userId: auth.uid,
          like: !isLikeButton,
          reviewId: reviewId
        })
        this.props.addVote({
          userId: auth.uid,
          like: isLikeButton,
          reviewId: reviewId
        })
      } else {
        this.props.addVote({
          userId: auth.uid,
          like: isLikeButton,
          reviewId: reviewId
        })
      }
    }
  }

  render() {
    const { likes, isLikeButton, auth } = this.props;
    const uid = get(auth, 'uid', null);
    const countVoting = likes.reduce((count, user) => 
    user.like === isLikeButton ? count += 1 : count
    , 0)
    const isLikeVoted = likes.some(vote => vote.userId === uid && vote.like === true)
    const isDislikeVoted = likes.some(vote => vote.userId === uid && vote.like === false)
    return (
      <React.Fragment>
        { isLikeButton ? (
          <LikeButton count={countVoting} onClick={this.onVote} isVoted={isLikeVoted}/>
        ) : ( 
          <DislikeButton count={countVoting} onClick={this.onVote} isVoted={isDislikeVoted}/> 
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  addVote,
  deleteVote
}

VoteButtonContainer.propTypes = {
  likes: PropTypes.array,
  reviewId: PropTypes.string,
  isLikeButton: PropTypes.bool
}

VoteButtonContainer.defaultProps = {
  isLikeButton: false
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButtonContainer);
