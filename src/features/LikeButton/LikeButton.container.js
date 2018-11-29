import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LikeButton from './LikeButton.component';
import { firestore } from 'firebase';
import { firestoreConnect, getFirebase } from 'react-redux-firebase';
import { addVote, deleteVote } from '../../state/actions/voting.actions';
import { includes } from 'lodash';

class LikeButtonContainer extends Component {

  onVote = () => {
    const loggedIn = !this.props.auth.isEmpty;
    if (loggedIn) {
      const { auth, isLikeButton, reviewLikes } = this.props;

      if (reviewLikes.some(vote => vote.userId === auth.uid && vote.like === isLikeButton)) {
        console.log('delete vote')
        this.props.deleteVote({
          userId: this.props.auth.uid,
          like: this.props.isLikeButton,
          reviewId: this.props.reviewId
        })
      } else if (reviewLikes.some(vote => vote.userId === auth.uid && vote.like === !isLikeButton)) {
        console.log('edit vote')
        this.props.deleteVote({
          userId: this.props.auth.uid,
          like: !this.props.isLikeButton,
          reviewId: this.props.reviewId
        })
        this.props.addVote({
          userId: this.props.auth.uid,
          like: this.props.isLikeButton,
          reviewId: this.props.reviewId
        })
      } else {
        console.log('add vote')
        this.props.addVote({
          userId: this.props.auth.uid,
          like: this.props.isLikeButton,
          reviewId: this.props.reviewId
        })
      }
 

    }
  }

  render() {
    const { reviewLikes, isLikeButton } = this.props;
    const countLike = reviewLikes.reduce((count, user) => 
      user.like === isLikeButton ? count+=1 : count
    , 0)
    return (
      <LikeButton isLikeButton={isLikeButton} count={countLike} onClick={this.onVote}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.firebase.auth,
  reviewLikes: state.firestore.data.recommendations[ownProps.reviewId].likes
});

const mapDispatchToProps = {
  addVote,
  deleteVote
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButtonContainer);
