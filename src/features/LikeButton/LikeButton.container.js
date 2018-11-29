import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LikeButton from './LikeButton.component';
import { firestore } from 'firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { addVote } from '../../state/actions/voting.actions';
import { includes } from 'lodash';

class LikeButtonContainer extends Component {

  onVote = () => {
    const loggedIn = !this.props.auth.isEmpty;
    if (loggedIn) {
      const { likes } = this.props.votingLocalArray;
      const { auth, isLikeButton } = this.props;
      // const isTheSame = likes.some(vote => 
      //   vote.userId === auth.uid && vote.like === isLikeButton
      // )
      // this.props.onVote({
      //   userId: this.props.auth.uid,
      //   like: this.props.isLikeButton
      // })

      if (likes.some(vote => vote.userId === auth.uid && vote.like === isLikeButton)) {
        console.log('delete vote')
      } else if (likes.some(vote => vote.userId === auth.uid && vote.like === !isLikeButton)) {
        console.log('edit vote')
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
    const { likes, isLikeButton } = this.props;
    const countLike = likes.reduce((count, user) => 
      user.like === isLikeButton ? count+=1 : count
    ,0)
    return (
      <LikeButton isLikeButton={isLikeButton} count={countLike} onClick={this.onVote}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  votingLocalArray: state.voting
});

const mapDispatchToProps = {
  addVote
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButtonContainer);
