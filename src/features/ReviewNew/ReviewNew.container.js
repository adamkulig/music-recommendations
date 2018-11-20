import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import ReviewNew  from './ReviewNew.component';
import { TYPES, RATING, GENRES } from '../../variables/review.variables';

class ReviewNewContainer extends Component {
  state = {
    data: {
      type: '',
      band: '',
      album: '',
      track: '',
      genre: '',
      link: '',
      rating: '',
      text: '',
      similar: ''
    },
  }

  onChange = event => 
    this.setState({
      data: {
        ...this.state.data,
        [event.target.id]: event.target.value  
      }
    });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignIn(this.state.data)
  }

  render() {
    console.log(this.state)
    return (
      <ReviewNew 
        onSubmit={this.onSubmit} 
        onChange={this.onChange}
        data={this.state.data}
        types={TYPES}
        genres={GENRES}
        rating={RATING}
      />
    );
  }
}

// const mapDispatchToProps = {
//   onCreateReview: createReview
// }

// export default connect(null, mapDispatchToProps)(ReviewNewContainer);
export default (ReviewNewContainer);
