import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton.component';
import DislikeButton from './DislikeButton.component';
import { vote } from '../../state/actions/voting.actions';
import { get, some, reduce } from 'lodash';

class VoteButtonContainer extends Component {

  onVote = () => {
    const isLoggedIn = !this.props.auth.isEmpty;
    if (isLoggedIn) {
      const { auth, isLikeButton: newVote, likes, reviewId, vote } = this.props;
      const currentVote = likes[auth.uid];
      vote({
        reviewId: reviewId,
        userId: auth.uid,
        like: (currentVote === newVote) ? null : newVote
      })
    }
  }

  render() {
    const { likes, isLikeButton, auth } = this.props;
    const uid = get(auth, 'uid', null);
    const countVoting = reduce(likes, (count, vote) => 
    vote === isLikeButton ? count += 1 : count
    , 0);
  
    const isLikeVoted = some(likes, (vote, key) => key === uid && vote === true);
    const isDislikeVoted = some(likes, (vote, key) => key === uid && vote === false);

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
  vote
}

VoteButtonContainer.propTypes = {
  likes: PropTypes.any, /* it's a map, throw an error... */
  reviewId: PropTypes.string,
  isLikeButton: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButtonContainer);
